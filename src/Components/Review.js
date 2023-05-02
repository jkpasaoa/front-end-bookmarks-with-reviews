
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  //Update
  // toggle functionality
  // hide the form, or show the form

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  }

  return (
    <div className="Review">
      <button onClick={toggleView}>edit this review</button>
      {
        viewEditForm ? (
          <ReviewForm 
          reviewDetails={review} 
          toggleView={toggleView}
          handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h4>
              {review.title} <span>{review.rating}</span>
            </h4>
            <h5>{review.reviewer}</h5>
            <p>{review.content}</p>
            <button onClick={() => handleDelete(review.id)} >delete</button>
          </div>
        )
      }

    </div>
  )
}

export default Review;

// import { useState } from "react";
// import ReviewForm from "./ReviewForm";


// function Review({ review, handleDelete, handleSubmit }) {
//   const [viewEditForm, toggleEditForm] = useState(false);

//   //update
//   //toggle functionality
//   //hide the form, or show the form

//   const toggleView = () => {
//     toggleEditForm(!viewEditForm);
//     // 
//   }


//   return (
//     <div className="Review">
//       <button onClick={toggleView}>edit this review</button>
//       {
//         viewEditForm ? (
//           // {/* if the value is true, show it */ }
//           <ReviewForm reviewDetails={review} />
//         ) : (
//           <div>
//             <h4>
//               {review.title} <span>{review.rating}</span>
//             </h4>
//             <h5>{review.reviewer}</h5>
//             <p>{review.content}</p>
//             <button onClick={() => handleDelete(review.id)}>delete</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Review;
