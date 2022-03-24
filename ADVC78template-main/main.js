var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Atul Kulkarni", "Digambar Kulkarni", "Soham Kulkarni", "Sakshi Kulkarni", "Tabassum Wadasadawala"];
var i = 0;
function update()
{
  
    for(a=0;a<5;a++){
      document.getElementById("family_member_image").src=images[a];
      document.getElementById("family_member_name").innerHTML=names[a];
    }
    
    
 
  
}
