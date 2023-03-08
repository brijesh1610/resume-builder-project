import { margin } from "@mui/system"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
const AboutUs=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
           <h1 className="text-start">Resume Builder</h1>
           <h6 className="text-start margin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae deleniti voluptates debitis omnis quas odio nesciunt necessitatibus ad voluptatem beatae commodi ducimus culpa, optio ipsam sed? Amet hic impedit pariatur qui, facere ducimus repellendus tempora odio ratione modi, harum laboriosam explicabo deleniti ex porro adipisci officiis error quo beatae repudiandae exercitationem accusamus sint consequatur suscipit! Impedit architecto sapiente voluptatem eveniet iste amet labore expedita repellendus, in eaque deleniti eum velit deserunt cupiditate doloremque laborum? Ut necessitatibus hic quos tempora error dolor libero cum. Qui eos, voluptatum aliquam totam at quidem nesciunt harum optio. Delectus recusandae, vel cumque illo eius possimus officia qui aspernatur eaque culpa fugit? Excepturi accusamus recusandae, explicabo sint culpa repudiandae quasi, neque unde voluptatem accusantium nostrum ipsum eum vel ullam eos quibusdam, reiciendis incidunt adipisci quas? Facere ipsa ex ipsam quibusdam, dignissimos rem esse dicta vero, minus eaque neque? Excepturi, dicta accusantium similique mollitia aut praesentium fugit impedit accusamus magni nesciunt ipsam sed veniam deserunt recusandae dolorum delectus iusto consectetur et ad quibusdam sunt, amet in vitae? Delectus laborum ut molestias numquam rerum repellendus ducimus aliquid nemo facere! Eos pariatur quo a quasi ipsa voluptatibus sit laboriosam ipsam, repudiandae ab sunt accusantium, culpa saepe non corrupti.  </h6>
           
           <h5 className="text-start " style={{marginTop:"40px"}}>Share With Your Friends</h5>
           <div className="text-start ">
           <FacebookIcon  className="m-2 border border-3"color="primary"/>
           <LinkedInIcon className="m-2 border border-3"color="primary"/>
           <WhatsAppIcon className="m-2 border border-3"color="success"/>
           <TwitterIcon className="m-2 border border-3"color="primary"/>
            <MailIcon className="m-2 border border-3"color="black"/>
            </div>
           </div>
           <div className="col-md-6">
            
           </div>
        </div>
        </div>
    )
}


export default AboutUs