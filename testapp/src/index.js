import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

function Header(props){ // { text: 'Mohamed Aldahoul', age: 32 }
    return(
        <div>
            <div > 
                <h1>Hello : {props.text} {props.age}</h1>
            </div>
            <div > 
                <p className ="img"> Image {props.text}</p>
                <p className ="author"> {name}</p>
                <p className ="context"> HackYourFuture Class 3</p>
            </div>
            <div classNam="Post-Comment" > <b><em>Post Comment : </em></b>
                <span className ="img"> Add picture to {props.text}, </span>
                <span className ="author"> { name }, </span>
                <span className ="context"> Add a Comment</span>
            </div>
        </div>
    );
}

function Post(props){
    return(
        <article>
            <p>
                {props.text}
            </p>
                <Comments publishMonth = {props.month}/>
        </article>
    );
}
function Comment(props){ 
    return(
        <div>
            <span className ="img"> Image {props.text}</span>
                <span className ="author"><b> {name} </b></span>
                <span className ="context"> <em>Write your comment here</em></span>
        </div > 
    );       
}    

function Comments(props){
    return(
        <div>
            <h1> {props.publishMonth}</h1>
            <Comment text ="comment 1"/>
            <Comment text ="comment 1"/>
            <Comment text ="comment 1"/>
        </div>
    );
}

const name = 'Mohamed Aldahoul';

const texts = [
    'post 1',
    'post 2',
    'post 3'
];

ReactDOM.render(
   <div>
    <div className  ="class" >
            <Header text = {name} age = {32} />
            <Post />
            {
                texts.map(function(PostContent){
                    return <Post text= {PostContent} month ='May'/>
                })
            }
            <Header text = "Test 1" />
            <Header text = "Test 2" />
        </div>
        
        <div > 
            <h1>Hello To React</h1>
        </div>

        <div> 
            <h2> Welcome {name} To ReactJs </h2>
        </div>

        <div> 
            <h2>{`${5 + 5} ${name}`}</h2>
        </div>
</div>,

 
container,
);

// ReactDOM.render(
//     <div className  ="class" >
            
//              <Post />
//              {
//                  texts.map(function(text){
//                      return <Post text = {text}/>
//                  })
//              }
//     </div>
//              );