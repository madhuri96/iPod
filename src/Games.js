import React from 'react';

class Games extends React.Component{
     
    //Redering style and stucture
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        {/* use flaticon */}
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt=""></img>
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                      {/* GIFS in giphy */}
                    <img style={styles.image} src="https://media3.giphy.com/media/jWvyjhqUq20jDo378D/200w.webp?cid=ecf05e476wdiuqrirvl4fn2la5ck4s52f5v1mcqdqosmgzeo&rid=200w.webp&ct=g" alt=""/>
                </div>
                
            </div>
        );
    }
    
}

//styles of games container
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default Games;