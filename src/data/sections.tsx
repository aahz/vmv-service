import * as React from "react";

export const SECTION_KEYS = {
	'SERVERS_ADMINISTRATION': 'servers-administration',
	'NETWORK': 'network',
	'WORKSPACE_SUPPORT': 'workspace-support',
	'TECH_SETUP': 'tech-setup',
	'ASTRAL': 'astral',
	'1C_SOFTWARE': '1c-software',
};

export const SECTIONS = [
	{
		key: SECTION_KEYS['SERVERS_ADMINISTRATION'],
		title: 'Администрирование серверов',
		titleJSX: <>Администрирование серверов</>,
		image: require('../assets/images/section/servers-administration_sm.jpg'),
		descriptionShort: 'Настройка любых серверов на базе линеек операционных систем Windows, Linux и FreeBSD',
		callToAction: {
			section: 'Интересно узнать что мы можем?',
			contacts: 'Поднимем любой сервер!',
		},
		isReady: true,
	},
	{
		key: SECTION_KEYS['NETWORK'],
		title: 'Обслуживание компьютерных сетей',
		titleJSX: <>Обслуживание сетей</>,
		image: require('../assets/images/section/network_sm.jpg'),
		descriptionShort: 'Монтаж и демонтаж сетевого оборудования, настройка программного обеспечения и функций сетевого оборудования',
		callToAction: {
			section: 'Узнайте больше о наших возможностях!',
			contacts: 'Звонок и сеть будет настроена!',
		},
		isReady: true,
	},
	{
		key: SECTION_KEYS['WORKSPACE_SUPPORT'],
		title: 'Поддержка рабочих мест',
		titleJSX: <>Поддержка рабочих мест</>,
		image: require('../assets/images/section/workspace-support_sm.jpg'),
		descriptionShort: 'Срочный ремонт компьютеров, восстановление важной информации, подключение переферии, удаление вирусов',
		callToAction: {
			section: 'Прочитайте о наших услугах поддержки!',
			contacts: 'Оперативная поддержка!',
		},
		isReady: true,
	},
	{
		key: SECTION_KEYS['TECH_SETUP'],
		title: 'Установка и модернизация техники',
		titleJSX: <>Установка и модернизация техники</>,
		image: require('../assets/images/section/tech-setup_sm.jpg'),
		descriptionShort: 'Диагностика и замена комплектующих, модернизация оборудования с установкой нового лицензионного программного обеспечения',
		callToAction: {
			section: 'Посмотрите что мы готовы вам предложить!',
			contacts: 'Расскажем и поможем!',
		},
		isReady: true,
	},
	{
		key: SECTION_KEYS['ASTRAL'],
		title: 'Астрал: Отчетность, Электронная подпись, Электронный документооборот',
		titleJSX: <>Астрал</>,
		image: require('../assets/images/section/astral_sm.jpg'),
		descriptionShort: '',
		callToAction: {
			section: '',
			contacts: '',
		},
		isReady: false,
	},
	{
		key: SECTION_KEYS['1C_SOFTWARE'],
		title: '1С Предприятие',
		titleJSX: <><span style={{whiteSpace: 'nowrap'}}>1С Предприятие</span></>,
		image: require('../assets/images/section/1c-software_sm.jpg'),
		descriptionShort: '',
		callToAction: {
			section: '',
			contacts: '',
		},
		isReady: false,
	},
];
