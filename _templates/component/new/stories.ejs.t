---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import <%= name %> from ".";  

export default {
	title: "<%= name %>",
	component: <%= name %>
}


export const Default = ()=>{
	return <<%= name %> />
}