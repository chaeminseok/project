export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번쨰 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://pixabay.com/ko/photos/%EC%B9%9C%ED%80%98%ED%8F%AC%EC%9D%BC-%EA%BD%83%EB%93%A4-%EC%8B%9D%EB%AC%BC-8072071/",
        },
        {
          src: "https://pixabay.com/ko/photos/%EC%8B%9D%EB%AC%BC-%EB%82%98%EB%AD%87%EC%9E%8E-%EC%9E%8E-%EC%95%A1-%EB%AC%BC%EB%B0%A9%EC%9A%B8-8049076/",
        },
        {
          src: "https://pixabay.com/ko/photos/%EC%8B%9D%EB%AC%BC-%EB%82%98%EB%AD%87%EC%9E%8E-%EC%9E%8E-%EC%95%A1-%EB%AC%BC%EB%B0%A9%EC%9A%B8-8049076/",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고 싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  constent: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};
export default reducer;
