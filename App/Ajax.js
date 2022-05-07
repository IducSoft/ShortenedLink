import ObjectLink from "./ObjectLink.js";
import RenderTodo from "./RenderTodo.js";

async function getUser(link) {
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
      let ObjectToAddLocalStorage= new ObjectLink(response.data.result.original_link, response.data.result.full_short_link);
      let arregloLocal = JSON.parse(window.localStorage.getItem("todoTask"));
      arregloLocal.unshift(ObjectToAddLocalStorage);
      window.localStorage.setItem("todoTask", JSON.stringify(arregloLocal));
      RenderTodo();
    } catch (error) {
      console.error(error);
      let errors = document.getElementById("url-list-shorts");
      errors.innerHTML=null;
      errors.innerHTML=`
        <h2 style="text-align:center;">${error.message}</h2>
      `;
    }
    return link;
}
export default getUser;
