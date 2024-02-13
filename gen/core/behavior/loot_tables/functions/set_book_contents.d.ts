export type SetBookContents = {
	function: 'set_book_contents';
	author: string;
	title: string;
	pages: Array<string>;
};
