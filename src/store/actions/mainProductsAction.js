import {GET_ALL_PRODUCTS, LOAD_MORE_PRODUCTS} from '../types'

const getAllProducts = async(page = 1) => {
    let res = await fetch(`http://localhost/getallproducts/?limit=10&${page}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    res = await res.json();
    res = res.result;
    return res;
};

export const getProducts = async page => ({
    type: GET_ALL_PRODUCTS,
    allProducts: await getAllProducts(page),
});

// export const getUsersThunk = key => async dispatch => {
//     const response = await usersAPI.getUsers(key);
//     dispatch({ type: GET_USERS, data: response.data.data, meta: response.data.meta });
// };

export const loadMoreProducts = async (page) => ({
    type: LOAD_MORE_PRODUCTS,
    allProducts: await getAllProducts(page),
});
