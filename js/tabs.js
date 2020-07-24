// $('.tabs_container>ul>li').hover(function () {
// 	$(this)
// 		.addClass('active_tab-link')
// 		.siblings()
// 		.removeClass('active_tab-link')
// 		.closest('.contacts_block')
// 		.find('div.tabs_content_container')
// 		.removeClass('active_tab-content')
// 		.eq($(this).index())
// 		.addClass('active_tab-content')
// });

Tab = (tabData, i) => {
	return `<li class='tab-link_tab' id='${i}'><span>${tabData.name}</span></li>`
}

TabList = (tabs) => {
	return `<ul>
				${tabs.map((el,i) => Tab(el,i)).join('')}
			</ul>`
}

let tabs = [
	{
		name: 'github',
		contentLink: 'https://github.com/gukobrist',
		contentLinkText: '@github/gukobrist',
		contentText: 'Здесь вы можете посмотреть мои проекты'
	},
	{
		name: 'email',
		contentLink: 'amromashov@gmail.com',
		contentLinkText: 'amromashov@gmail.com',
		contentText: 'Сюда можете написать'
	},
	{
		name: 'telegram',
		contentLink: '@alekseyr',
		contentLinkText: '@alekseyr',
		contentText: 'Быстрая связь со мной'
	},	
];

$('.tabs_container')[0].innerHTML = TabList(tabs);

TabContent = (tab) => {
	return `<div class='tabs_content_container' style='display: block'>
				<a href='${tab.contentLink}' target='_blank'>${tab.contentLinkText}</a>
				<p>${tab.contentText}</p>
			</div>`
}

$('.tab-link_tab').on('click', function () {
	$('.tab-content_wrapper')[0].innerHTML = TabContent(tabs[+this.id]);
})