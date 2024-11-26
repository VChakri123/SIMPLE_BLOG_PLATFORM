using my.blogs as my from '../db/schema';

service CatalogService {
    entity USER as projection on my.USER;
    entity BLOGPOST as projection on my.BLOGPOST;
    entity CATEGORY as projection on my.CATEGORY;
    entity COMMENT as projection on my.COMMENT;
}
