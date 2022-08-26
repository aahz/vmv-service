declare type CSSModule = {[key: string]: string};

declare module '*.css' {
	const resource: CSSModule;
	export = resource;
}

declare module '*.less' {
	const resource: CSSModule;
	export = resource;
}

declare module '*.svg' {
	const value: string;
	export = value;
}

declare module '*.png' {
	const value: string;
	export = value;
}

declare module '*.jpg' {
	const value: string;
	export = value;
}

declare module '*.jpeg' {
	const value: string;
	export = value;
}

declare module '*.gif' {
	const value: string;
	export = value;
}
