/* Alpine work filter script. Reads JSON from #work-root[data-work]
   Exposes workFilter factory for x-data="workFilter()" */
function workFilter() {
  const root = document.getElementById('work-root');
  const staticWork = root ? JSON.parse(root.getAttribute('data-work') || '[]') : [];

  return {
    all: staticWork,
    // preferred ordering for chips (appear first); remaining types will be appended
  preferredWorkTypes: ['Site Builds', 'Custom Plugins', 'API Integrations', 'WooCommerce', 'Commerce7', 'Checkout Flows', 'Internal Tools', 'Gutenberg'],
  preferredStacks: ['WordPress', 'PHP', 'JavaScript', 'REST APIs', 'ACF', 'Gutenberg', 'WooCommerce', 'Commerce7', 'Loop'],
    filters: {
      workTypes: [],
      stack: [],
    },
  selectedTypes: [],
  selectedStacks: [],
  filtered: staticWork,
  filteredSlugs: staticWork.map((w) => w.slug),
    init() {
      const types = new Set();
      const stacks = new Set();

      this.all.forEach((w) => {
        (w.workTypes || []).forEach((t) => {
          // omit Theme Builds from primary visible filters (handled elsewhere in copy/services)
          if (t === 'Theme Builds') return;
          types.add(t);
        });
        (w.stack || []).forEach((s) => stacks.add(s));
  // no visibility collection — omitted per request
      });

  this.filters.workTypes = Array.from(types);
  this.filters.stack = Array.from(stacks);
  // produce ordered arrays based on preferred lists followed by other available options
  const orderTypes = (list, available) => {
    const out = [];
    list.forEach((t) => { if (available.includes(t)) out.push(t); });
    available.forEach((t) => { if (!out.includes(t)) out.push(t); });
    return out;
  };
  this.preferredWorkTypes = orderTypes(this.preferredWorkTypes, this.filters.workTypes);
  this.preferredStacks = orderTypes(this.preferredStacks, this.filters.stack);
      this.filter();
    },
    toggleType(t) {
      const i = this.selectedTypes.indexOf(t);
      if (i === -1) this.selectedTypes.push(t); else this.selectedTypes.splice(i, 1);
      this.filter();
    },
    toggleStack(s) {
      const i = this.selectedStacks.indexOf(s);
      if (i === -1) this.selectedStacks.push(s); else this.selectedStacks.splice(i, 1);
      this.filter();
    },
    reset() {
      this.selectedTypes = [];
      this.selectedStacks = [];
      this.filter();
    },
    filter() {
      this.filtered = this.all.filter((w) => {
        if (this.selectedTypes.length) {
          if (!w.workTypes) return false;
          if (!this.selectedTypes.some((t) => w.workTypes.includes(t))) return false;
        }
        if (this.selectedStacks.length) {
          if (!w.stack) return false;
          if (!this.selectedStacks.some((s) => w.stack.includes(s))) return false;
        }
        // no visibility filtering
        return true;
      });
      this.filteredSlugs = this.filtered.map((w) => w.slug);
    },
    matchesFilters(slug) {
      return this.filteredSlugs.includes(slug);
    },
    renderCard(item) {
      return `\
        <article class="rounded-2xl overflow-hidden border border-black/10 bg-white/50 shadow-sm">\
          <a href="/work/${item.slug}/" class="block">\
            <div class="relative aspect-16/10 bg-neutral-200">\
              ${item.image ? `<img src="${item.image}" alt="${item.title}" class="h-full w-full object-cover"/>` : `<div class="flex h-full items-center justify-center text-neutral-500">No image</div>`}\
            </div>\
            <div class="p-5">\
              <p class="text-xs font-semibold uppercase text-neutral-500">${item.clientVisibility || 'Client Withheld'}</p>\
              <h3 class="mt-2 text-lg font-display text-neutral-900">${item.title}</h3>\
              ${item.client ? `<div class="mt-1 text-sm text-neutral-600">${item.client}</div>` : ''}\
              <p class="mt-3 text-sm text-neutral-700">${item.summary}</p>\
            </div>\
          </a>\
        </article>\
      `;
    },
  };
}

// expose globally if needed
window.workFilter = workFilter;
