import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const createReview = review => dispatch => (
  ReviewAPI.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const fetchReviews = () => dispatch => 
    ReviewAPI.fetchReviews().then((reviews) => 
    dispatch(receiveReviews(reviews)))



