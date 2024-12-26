import { type App, type Page } from 'vuepress/core';
import { ReleasedPage, CategoryPageData, PagePluginOptions, CategoryPaginationPost } from '../types';
export default class PageCreater {
    app: App;
    options: PagePluginOptions;
    themeConfig: Record<string, unknown>;
    private __series__;
    private __extendedPages__;
    private __category_keys__;
    private __category_page_data__;
    private __blogs_to_be_released__;
    constructor(app: App, options: PagePluginOptions, themeConfig: Record<string, unknown>);
    get posts(): ReleasedPage[];
    get series(): Record<string, any>;
    get extendedPages(): Promise<Page>[];
    get categorySummary(): CategoryPageData;
    get categoryPaginationPosts(): Record<string, CategoryPaginationPost>;
    parse(): void;
    private _parseChineseInPagePathToPinyin;
    private _parsePageOptions;
    private _parseCategoryPageOptions;
    private _parseOrdinaryPageOptions;
    private _setBlogsToCategoryPageData;
    private _createExtendedPages;
    private _createCategoryPaginationPages;
    private _createBlogPaginationPages;
    private _setBlogCategories;
    private _setSeries;
}
