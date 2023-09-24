
import CardWhy from "../CardWhy/CardWhy";
import "./Why.css"
function Why() {
  return (
    <div className='why-container'>
        <div className="why-texts">
            <h6>Why you should choose our app</h6>
            </div>

        <div className="cards">
          <CardWhy 
             url={'/src/assets/img/illustrations/app.png'} 
             title={"app development"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />

            <CardWhy 
             url={'/src/assets/img/illustrations/time-award.png'} 
             title={"10 Times Award"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />

            <CardWhy 
             url={'/src/assets/img/illustrations/cloud.png'} 
             title={"Cloud Storage"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />

            <CardWhy 
             url={'/src/assets/img/illustrations/customization.png'} 
             title={"Customization"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />

             
            <CardWhy 
             url={'/src/assets/img/illustrations/ux.png'} 
             title={"UX Planning"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />

                <CardWhy 
             url={'/src/assets/img/illustrations/support.png'} 
             title={"Customer Support"}
             text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
             />


        </div>
        

        
    </div>
  );
}

export default Why;