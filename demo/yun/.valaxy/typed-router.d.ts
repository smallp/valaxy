/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/_drafts/README': RouteRecordInfo<'/_drafts/README', '/_drafts/README', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/[year]/': RouteRecordInfo<'/[year]/', '/:year', { year: ParamValue<true> }, { year: ParamValue<false> }>,
    '/[year]/[month]/': RouteRecordInfo<'/[year]/[month]/', '/:year/:month', { year: ParamValue<true>, month: ParamValue<true> }, { year: ParamValue<false>, month: ParamValue<false> }>,
    '/404': RouteRecordInfo<'/404', '/404', Record<never, never>, Record<never, never>>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/about/site': RouteRecordInfo<'/about/site', '/about/site', Record<never, never>, Record<never, never>>,
    '/albums/': RouteRecordInfo<'/albums/', '/albums', Record<never, never>, Record<never, never>>,
    '/albums/daily': RouteRecordInfo<'/albums/daily', '/albums/daily', Record<never, never>, Record<never, never>>,
    '/albums/miracle': RouteRecordInfo<'/albums/miracle', '/albums/miracle', Record<never, never>, Record<never, never>>,
    '/albums/sunset': RouteRecordInfo<'/albums/sunset', '/albums/sunset', Record<never, never>, Record<never, never>>,
    '/albums/young': RouteRecordInfo<'/albums/young', '/albums/young', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/bangumi/': RouteRecordInfo<'/bangumi/', '/bangumi', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/examples/addons/components': RouteRecordInfo<'/examples/addons/components', '/examples/addons/components', Record<never, never>, Record<never, never>>,
    '/examples/custom-components': RouteRecordInfo<'/examples/custom-components', '/examples/custom-components', Record<never, never>, Record<never, never>>,
    '/examples/sites': RouteRecordInfo<'/examples/sites', '/examples/sites', Record<never, never>, Record<never, never>>,
    '/examples/without-aside': RouteRecordInfo<'/examples/without-aside', '/examples/without-aside', Record<never, never>, Record<never, never>>,
    '/girls/': RouteRecordInfo<'/girls/', '/girls', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/notes/': RouteRecordInfo<'/notes/', '/notes', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/中文Post测试': RouteRecordInfo<'/posts/中文Post测试', '/posts/中文Post测试', Record<never, never>, Record<never, never>>,
    '/posts/about': RouteRecordInfo<'/posts/about', '/posts/about', Record<never, never>, Record<never, never>>,
    '/posts/categories-a-b': RouteRecordInfo<'/posts/categories-a-b', '/posts/categories-a-b', Record<never, never>, Record<never, never>>,
    '/posts/categories-a-b-c': RouteRecordInfo<'/posts/categories-a-b-c', '/posts/categories-a-b-c', Record<never, never>, Record<never, never>>,
    '/posts/code': RouteRecordInfo<'/posts/code', '/posts/code', Record<never, never>, Record<never, never>>,
    '/posts/date': RouteRecordInfo<'/posts/date', '/posts/date', Record<never, never>, Record<never, never>>,
    '/posts/design': RouteRecordInfo<'/posts/design', '/posts/design', Record<never, never>, Record<never, never>>,
    '/posts/dev': RouteRecordInfo<'/posts/dev', '/posts/dev', Record<never, never>, Record<never, never>>,
    '/posts/draft': RouteRecordInfo<'/posts/draft', '/posts/draft', Record<never, never>, Record<never, never>>,
    '/posts/encrypted-part-post': RouteRecordInfo<'/posts/encrypted-part-post', '/posts/encrypted-part-post', Record<never, never>, Record<never, never>>,
    '/posts/encrypted-post': RouteRecordInfo<'/posts/encrypted-post', '/posts/encrypted-post', Record<never, never>, Record<never, never>>,
    '/posts/excerpt-type-ai': RouteRecordInfo<'/posts/excerpt-type-ai', '/posts/excerpt-type-ai', Record<never, never>, Record<never, never>>,
    '/posts/excerpt-type-html': RouteRecordInfo<'/posts/excerpt-type-html', '/posts/excerpt-type-html', Record<never, never>, Record<never, never>>,
    '/posts/excerpt-type-md': RouteRecordInfo<'/posts/excerpt-type-md', '/posts/excerpt-type-md', Record<never, never>, Record<never, never>>,
    '/posts/excerpt-type-text': RouteRecordInfo<'/posts/excerpt-type-text', '/posts/excerpt-type-text', Record<never, never>, Record<never, never>>,
    '/posts/framework-and-pages': RouteRecordInfo<'/posts/framework-and-pages', '/posts/framework-and-pages', Record<never, never>, Record<never, never>>,
    '/posts/hello-valaxy': RouteRecordInfo<'/posts/hello-valaxy', '/posts/hello-valaxy', Record<never, never>, Record<never, never>>,
    '/posts/hide': RouteRecordInfo<'/posts/hide', '/posts/hide', Record<never, never>, Record<never, never>>,
    '/posts/hide-in-index': RouteRecordInfo<'/posts/hide-in-index', '/posts/hide-in-index', Record<never, never>, Record<never, never>>,
    '/posts/katex': RouteRecordInfo<'/posts/katex', '/posts/katex', Record<never, never>, Record<never, never>>,
    '/posts/long-toc': RouteRecordInfo<'/posts/long-toc', '/posts/long-toc', Record<never, never>, Record<never, never>>,
    '/posts/lots-of-images': RouteRecordInfo<'/posts/lots-of-images', '/posts/lots-of-images', Record<never, never>, Record<never, never>>,
    '/posts/markdown': RouteRecordInfo<'/posts/markdown', '/posts/markdown', Record<never, never>, Record<never, never>>,
    '/posts/mermaid': RouteRecordInfo<'/posts/mermaid', '/posts/mermaid', Record<never, never>, Record<never, never>>,
    '/posts/post-updated': RouteRecordInfo<'/posts/post-updated', '/posts/post-updated', Record<never, never>, Record<never, never>>,
    '/posts/redirect': RouteRecordInfo<'/posts/redirect', '/posts/redirect', Record<never, never>, Record<never, never>>,
    '/posts/test': RouteRecordInfo<'/posts/test', '/posts/test', Record<never, never>, Record<never, never>>,
    '/posts/test/a': RouteRecordInfo<'/posts/test/a', '/posts/test/a', Record<never, never>, Record<never, never>>,
    '/posts/test-images': RouteRecordInfo<'/posts/test-images', '/posts/test-images', Record<never, never>, Record<never, never>>,
    '/posts/test-tags': RouteRecordInfo<'/posts/test-tags', '/posts/test-tags', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
    '/test/deadlinks': RouteRecordInfo<'/test/deadlinks', '/test/deadlinks', Record<never, never>, Record<never, never>>,
    '/test/special-character': RouteRecordInfo<'/test/special-character', '/test/special-character', Record<never, never>, Record<never, never>>,
    '/test/time_warning': RouteRecordInfo<'/test/time_warning', '/test/time_warning', Record<never, never>, Record<never, never>>,
    '/yun/': RouteRecordInfo<'/yun/', '/yun', Record<never, never>, Record<never, never>>,
  }
}
