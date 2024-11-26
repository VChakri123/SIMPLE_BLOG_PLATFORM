namespace my.blogs;

entity USER {
  key user_id : Integer;
  username  : String;
  email  : String;
  password_hash   :  String;
  profile_picture  : String;
  role: String;
  created_at: String;
}

entity BLOGPOST {
  key post_id : Integer;
  title : String;
  content : String;
  author_id : Integer;
  created_at : String;
  updated_at : String;
  category_id : Integer;
  cover_image : String;
  views : Integer;
}

entity CATEGORY {
  key category_id : Integer;
  name : String;
  description : String;
  post_count : Integer;
}

entity COMMENT { 
  key comment_id : Integer;
  post_id : Integer;
  user_id : Integer;
  name : String;
  email : String;
  content : String;
  created_at : String;
}
