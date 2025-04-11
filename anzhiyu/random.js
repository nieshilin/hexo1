var posts=["2025/04/11/小聂小记/烧烤/","2025/04/11/默认分类/搭建测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };