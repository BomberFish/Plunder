export let settingsStore = $store(
	{
		count: 0,
		options: $state({

		}),
	},
	{ ident: "user-settings", backing: "localstorage", autosave: "auto" }
);

export let progressStore = $store(
  {
    count: 0,
    options: $state({
      count: 0,
    }),
  },
  { ident: "user-progress", backing: "localstorage", autosave: "auto" }
);
