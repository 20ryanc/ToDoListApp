import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import{ CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

var host = "http://172.18.6.83:8080";

var url = host + "/api/v1/";

export async function register(email, password){

    let content = await client({
        method: 'post',
        url: url+"register",
        data: {
          email: email,
          password: password
        }
      });
    return content;
}

export async function userdel(){

    let content = await client({
        method: 'delete',
        url: url+"delete",
        withCredentials: true
      });
    return content;
}

export async function login(email, password){

    let content = await client({
        method: 'post',
        url: url+"login",
        withCredentials: true,
        data: {
          email: email,
          password: password, 
        }
      });
    return content;
}

export async function logout(){

    let content = await client({
        method: 'post',
        url: url+"logout",
        withCredentials: true
      });
    return content;
}

export async function getinfo(){

    let content = await client({
        method: 'get',
        url: url+"info",
        withCredentials: true
      });
    return content;
}

export async function insertEntry(data){

    let content = await client({
        method: 'post',
        url: url+"insertEntry",
        withCredentials: true,
        data: data
      });
    return content;
}

export async function getEntry(){

    let content = await client({
        method: 'get',
        url: url+"getEntry",
        withCredentials: true
      });
    return content;
}

export async function deleteEntry(){

  let content = await client({
      method: 'delete',
      url: url+"deleteEntry",
      withCredentials: true
    });
  return content;
}

export async function runall(){ //for testing only

    await register("bigguy@gmail.com", "big stuff").then(()=>console.log("success reg")).catch(()=>console.log("unsuc reg"));
    await login("bigguy@gmail.com", "big stuff").then(()=>console.log("success login")).catch(()=>console.log("unsuc login"));
    await getinfo().then((content)=>console.log(content.data)).catch((err)=>console.log("uncomfy"));
    await insertEntry([
        {
                "title": "kewi",
                "content": "ppboy"
        },
        {
                "title": "sunfhower",
                "content": " jfalsj faklsj fl;aksd flas jflak jl;kjf al;sfj al;sfj laksdf jlkadsj fkladjf kldfj al;jf lsdkfj skaljf akldfj aklsjfd lk;afklsjf klas jfkldsjf aklsjf lk;sdfj sklfj asklfj alk;sfj aklsjf kal;jf lkasj lasfj ldfj al;dj fklasjf kaldjf lka;jf lkasjf kladsjf lkasdjf lkas;dfj lasdj flkj lksd jladjf klsj ldjf ldjlsdk lkafj klsjf laj klsdj fal jfla dlkdj fkaljfdklajdf lkasjdf lkas klj klasjf akls;fj kadsl flkaj fklsdj fladj fkal;djf lsdkj flkdj fkla jfklaj fklj dlkaf j asdfja;sdfjal;sdjfalsdjfalsdfjalsdjfal;sfjalsfkjalsd;fja;lskfjal;sdfjal;sdfjal;sdkjfa;lsdfjkla;skdjfal;skdjfal;sdkfjal;skdjfal;skdjfal;sdfjal;ksjdfalksfjal;djfja lkdfjskdlfj akljf l;kasdj fl;adsk jfalsj faklsj fl;aksd flas jflak jl;kjf al;sfj al;sfj laksdf jlkadsj fkladjf kldfj al;jf lsdkfj skaljf akldfj aklsjfd lk;afklsjf klas jfkldsjf aklsjf lk;sdfj sklfj asklfj alk;sfj aklsjf kal;jf lkasj lasfj ldfj al;dj fklasjf kaldjf lka;jf lkasjf kladsjf lkasdjf lkas;dfj lasdj flkj lksd jladjf klsj ldjf ldjlsdk lkafj klsjf laj klsdj fal jfla dlkdj fkaljfdklajdf lkasjdf lkas klj klasjf akls;fj kadsl flkaj fklsdj fladj fkal;djf lsdkj flkdj fkla jfklaj fklj dlkaf j asdfja;sdfjal;sdjfalsdjfalsdfjalsdjfal;sfjalsfkjalsd;fja;lskfjal;sdfjal;sdfjal;sdkjfa;lsdfjkla;skdjfal;skdjfal;sdkfjal;skdjfal;skdjfal;sdfjal;ksjdfalksfjal;djfja lkdfjskdlfj akljf l;kasdj fl;adsk jfalsj faklsj fl;aksd flas jflak jl;kjf al;sfj al;sfj laksdf jlkadsj fkladjf kldfj al;jf lsdkfj skaljf akldfj aklsjfd lk;afklsjf klas jfkldsjf aklsjf lk;sdfj sklfj asklfj alk;sfj aklsjf kal;jf lkasj lasfj ldfj al;dj fklasjf kaldjf lka;jf lkasjf kladsjf lkasdjf lkas;dfj lasdj flkj lksd jladjf klsj ldjf ldjlsdk lkafj klsjf laj klsdj fal jfla dlkdj fkaljfdklajdf lkasjdf lkas klj klasjf akls;fj kadsl flkaj fklsdj fladj fkal;djf lsdkj flkdj fkla jfklaj fklj dlkaf j asdfja;sdfjal;sdjfalsdjfalsdfjalsdjfal;sfjalsfkjalsd;fja;lskfjal;sdfjal;sdfjal;sdkjfa;lsdfjkla;skdjfal;skdjfal;sdkfjal;skdjfal;skdjfal;sdfjal;ksjdfalksfjal;djfja lkdfjskdlfj akljf l;kasdj fl;adsk jfalsj faklsj fl;aksd flas jflak jl;kjf al;sfj al;sfj laksdf jlkadsj fkladjf kldfj al;jf lsdkfj skaljf akldfj aklsjfd lk;afklsjf klas jfkldsjf aklsjf lk;sdfj sklfj asklfj alk;sfj aklsjf kal;jf lkasj lasfj ldfj al;dj fklasjf kaldjf lka;jf lkasjf kladsjf lkasdjf lkas;dfj lasdj flkj lksd jladjf klsj ldjf ldjlsdk lkafj klsjf laj klsdj fal jfla dlkdj fkaljfdklajdf lkasjdf lkas klj klasjf akls;fj kadsl flkaj fklsdj fladj fkal;djf lsdkj flkdj fkla jfklaj fklj dlkaf j"
        }
    
    ]).then(()=>console.log("success insert")).catch(()=>console.log((err) => console.log(err)));
    await getEntry().then((content)=>console.log(content.data)).catch((err)=>console.log(err));
    await deleteEntry().then(()=>console.log("entdel suc")).catch((err)=>console.log("entdel err"));
    await getEntry().then((content)=>console.log(content.data)).catch((err)=>console.log(err));
    await logout().then(()=>console.log("logout suc")).catch(()=>(console.log("logout err")));
    await userdel().then(()=>console.log("del suc")).catch((err)=>console.log("del err"));
    await login("bigguy@gmail.com", "big stuff").then(()=>console.log("success login")).catch(()=>console.log("unsuc login"));
    await userdel().then(()=>console.log("del suc")).catch((err)=>console.log("del err"));
}
