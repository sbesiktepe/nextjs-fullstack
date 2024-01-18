import React from "react";

import Image from "next/image";

interface ProductCommentProps {
  reviews?: {
    id?: string;
    userId?: string;
    productId?: string;
    rating?: number;
    comment?: string;
    createdDate?: string;
    user?: {
      id?: string;
      name?: string;
      email?: string;
      emailVerified?: boolean | null;
      image?: string;
      hashedPassword?: boolean | null;
      createdAt?: string;
      updatedAt?: string;
      role?: string;
    };
  }[];
}

const ProductComment: React.FC<ProductCommentProps> = ({ reviews = [] }) => {
  return (
    <div>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                {review.user?.image ? (
                  <img
                    src={review.user.image}
                    alt={`Profile of ${review.user.name}`}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                    alt="Default Profile"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                )}
                <strong>{review?.user?.name}</strong>: {review?.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductComment;
