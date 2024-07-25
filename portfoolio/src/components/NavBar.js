import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
           <Link className="main-link" to="Reklaam">
      <img src="https://www.kumaprint.ee/pub/media/catalog/product/cache/e0a7a6ecad8e9bb956a818e574251119/b/a/ba_nner_1.jpg" alt="" />
     <p>Reklaamlehele</p>
      </Link>
      <Link className="main-link" to="Hobused">
      <img src="https://esitlustarvikud.ee/800/banner-valibanner-spordivaljakul-2535.jpg" alt="" />
     <p>Hobuste lehele</p>
      </Link>
      <Link className="main-link" to="IPA">
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/304046208/DB/UI/FU/26802750/rectangular-cloth-banner-printing-services.jpeg" alt="" />
     <p>IPA lehele</p>
      </Link>
    </div>
  )
}

export default NavBar