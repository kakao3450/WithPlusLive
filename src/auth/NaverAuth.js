

const NaverAuth = async ()=>{



const { token } = req.body // client에서 전달받은 token

const userData = await axios.get('https://openapi.naver.com/v1/nid/me', {
    headers : {
        'Authorization' : `Bearer ${token}`,
    }
})

const getNaverToken = () => {
  if (!location.hash) return;
  const token = location.hash.split('=')[1].split('&')[0]; //token 출력
  
  axios.post(`http://localhost:3000/oauth/naver`, {
      token
  }, {
      withCredentials: true
  })
  .then((res)=> {
      window.location.replace('/login')
    //서버측에서 로직이 완료되면 홈으로 보내준다
  })
};


useEffect(() => {
  getNaverToken();
}, []);

return(
  <>
  </>
)

}