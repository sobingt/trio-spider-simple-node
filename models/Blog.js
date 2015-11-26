exports.blogs = [
              {
                header: "This is content for a blog one",
                title: "Blog One",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "sobin",
                category: "sci-fi",
                link: "/blog1"
              },
              {
                header: "This is content for a blog two",
                title: "Blog two",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "darshan",
                category: "horror",
                link: "/blog2"
              },
              {
                header: "This is content for a blog three",
                title: "Blog three",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "prath",
                category: "adventure",
                link: "/blog3"
              },
              {
                header: "This is content for a blog four",
                title: "Blog four",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "surya",
                category: "action",
                link: "/blog4"
              },
              {
                header: "This is content for a blog five",
                title: "Blog five",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "surya",
                category: "action",
                link: "/blog5"
              }
            ];
exports.categories = function getCategory(blogs){
  var tempArray = [];
  var found = false;
  for(var i=0; i< blogs.length; i++)
  {
    for(var j=0; j< tempArray.length; j++)
    {
      if(blogs[i].category==tempArray[j])
        found = true;
    }
    if(!found)
      tempArray.push(blogs[i].category);
  }
  return tempArray;
};