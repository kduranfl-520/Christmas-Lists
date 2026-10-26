/* Optional sync layer. Leave empty to run per-device (localStorage only).
   To add sync later, define window.CGT_SYNC with:
     pull: async () => ({ families, people, gifts, year }) | null   // called on load
     push: async (snapshot) => {}                                   // called after every change
   Back it with Firebase, Supabase, or a private Gist. */
window.CGT_SYNC = null;
