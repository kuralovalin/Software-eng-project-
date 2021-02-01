import {useContext,useEffect} from 'react';
import {Row} from 'react-bootstrap';
import MainContext from '../../contexts/MainContext';

const ls = ["araba","ağaç", "kalem", "kitap", "bardak", "ayakkabı", "pano", "baykuş", "kaplumbağa" , "tabela"];
function StoryTutorial() {
    const {token} = useContext(MainContext);
    useEffect(() => {
        if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
    },[token])
    return (token &&
        <div style={{height:"80vh"}}>
            <Row id="box" style={{textAlign:"center",justifyContent:"center",height:"45%",width:"100%",marginTop:15}} className="gradient-border">
                <div  style={{textAlign:"center",justifyContent:"center",height:"100%",width:"100%",overflow:"auto"}} >
                <h1 style={{fontWeight:"bold",marginTop:15}}>Memorize the words corresponding to the numbers. So when you want to memorize a list, you will relate to these concepts.</h1>
                <hr></hr>
                    <img alt="Mind Bullets" style={{width:"60%", height:"50vh"}} src="https://1.bp.blogspot.com/-AiecTOO8htA/Xt0kJ_pkFtI/AAAAAAAAQbU/62Xb11zHoSM1x9_r3CGNAnzPDdxgkLrmwCLcBGAsYHQ/s320/s%25C4%25B1n.png"></img>
                    <hr></hr>
                    <h1 style={{fontWeight:"bold",marginTop:15}}>
                        Example Words
                    </h1>
                    <hr></hr>
                    {ls.map((item,id) => <p style={{fontSize:25 }}>{id+1}.{item}</p>)}
                    </div>
                </Row>
            <Row id="box" style={{textAlign:"center",justifyContent:"center",height:"45%",width:"100%",marginTop:15}} className="gradient-border" >
                <div style={{textAlign:"center",justifyContent:"center",height:"100%",border:"1px solid black",width:"100%",overflow:"auto"}}>
                    <h1 style={{fontWeight:"bold",marginTop:15}}>
                        Example Usage
                    </h1>
                    <hr></hr>
                    <p style={{fontSize:25 }} >
                    Genç çocukları direk olan bir <span style={{fontWeight:"bold"}}>ağaç</span>. </p>
                    <p style={{fontSize:25 }} >Bir kuğu <span style={{fontWeight:"bold"}}>araba</span>ya binmiş kanadını da dışarı çıkartmış yüksek sesle müzik dinliyor</p>
                    
                    <p style={{fontSize:25 }} >Martılara <span style={{fontWeight:"bold"}}>kalem</span> atmak</p>
                    <p style={{fontSize:25 }} >Yelkeni <span style={{fontWeight:"bold"}}>kitap</span> olan yelkenli. Rüzgar estikçe sayfalar değişiyor  </p>
                    <p style={{fontSize:25 }} >Her parmakta bir <span style={{fontWeight:"bold"}}>bardak</span> </p>
                    <p style={{fontSize:25 }} >Düdük çalınca hizaya girip sayım yapan <span style={{fontWeight:"bold"}}>ayakkabılar</span> </p>
                    <p style={{fontSize:25 }} >Profesör zürafa <span style={{fontWeight:"bold"}}>pano</span>ya formül yazıyor </p>
                    <p style={{fontSize:25 }} >Gözleri bozulup gözlük takan <span style={{fontWeight:"bold"}}>baykuş</span> </p>
                    <p style={{fontSize:25 }} >Sırtına balon bağlayıp uçam<span style={{fontWeight:"bold"}}>kaplumbağa</span></p>
                    <p style={{fontSize:25 }} >Davulu gösteren <span style={{fontWeight:"bold"}}>tabela</span></p>
                    
                    
                    </div></Row>
        </div>
    )
}

export default StoryTutorial
