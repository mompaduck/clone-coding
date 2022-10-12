import React from "react"
import { Link } from "react-router-dom"
import Moment from "react-moment"

export default function ListingItem({ listing, id }) {
  return (
    <div>
      <li>
        <Link className="contents" to={`/category/${listing.type}/${id}`}></Link>
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          src={listing.imgUrls[0]}
        />
      </li>
    </div>
  )
}
