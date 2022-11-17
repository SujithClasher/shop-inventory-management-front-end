import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { env } from "../../config";

let AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    let navigate = useNavigate();
    console.log("sivanathan...................");
    const [username, setUsername] = useState("siva");
    const [open, setOpen] = useState(false);
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [dashboardProduct, setDashboardProduct] = useState([]);
    const [dashboardOverview, setDashboardOverview] = useState({});
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);




    useEffect(() => {
        getBrand();
    }, []);

    useEffect(() => {
        getCategory()
    }, []);

    useEffect(() => {
        getproducts()
    }, []);

    useEffect(() => {
        getDashboardProduct()
    }, []);

    useEffect(() => {
        getDashboardProduct()
    }, [products]);


    useEffect(() => {
        getDashboardOverview()
    }, []);

    useEffect(() => {
        getDashboardOverview()
    }, [products]);


    useEffect(() => {
        getUser()
    }, []);


    useEffect(() => {
        getOrder()
    },[]);


    // const invoice = async (query) => {
    //     try {
    //         let value;
    //         if (!query) {
    //             value = await axios.get(`${env.api}/inventory/products`);
    //         } else {
    //             value = await axios.get(`${env.api}/inventory/products?q=${query}`);
    //         }
    //         setProducts(value.data.data);


    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const getBrand = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/inventory/brand`);
            } else {
                value = await axios.get(`${env.api}/inventory/brand?q=${query}`);
            }
            setBrand(value.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addBrand = async (values) => {
        try {
            let user = await axios.post(`${env.api}/inventory/Add-brand`, values);
            getBrand();
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                navigate("/home/brand");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editBrand = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/inventory/edit-brand/${id}`, values);
            getBrand();
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                navigate("/home/brand");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBrand = async (id) => {
        try {
            let value = await axios.delete(`${env.api}/inventory/delete-brand/${id}`);
            getBrand();
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                alert(message);
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };



    const getCategory = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/inventory/category`);
            } else {
                value = await axios.get(`${env.api}/inventory/category?q=${query}`);
            }
            setCategory(value.data.data);


        } catch (error) {
            console.log(error);
        }
    };

    const addCategory = async (values) => {
        try {
            let user = await axios.post(`${env.api}/inventory/add-category`, values);
            getCategory()
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                navigate("/home/category");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editCategory = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/inventory/edit-category/${id}`, values);
            getCategory()
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                navigate("/home/category");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            let value = await axios.delete(`${env.api}/inventory/delete-category/${id}`);
            getCategory();
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                alert(message);
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };


    // product

    const getproducts = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/inventory/products`);
            } else {
                value = await axios.get(`${env.api}/inventory/products?q=${query}`);
            }
            setProducts(value.data.data);


        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = async (values) => {
        try {
            let user = await axios.post(`${env.api}/inventory/add-product`, values);
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                getproducts()
                navigate("/home/products");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };



    const editProduct = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/inventory/edit-product/${id}`, values);
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                getproducts()
                navigate("/home/products");
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            let value = await axios.delete(`${env.api}/inventory/delete-product/${id}`);
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                getproducts();
                alert(message);
            } else {
                alert(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Dashboard

    const getDashboardProduct = async () => {

        try {
            let value = await axios.get(`${env.api}/inventory/dashboard-products`);
            const { data } = value;
            setDashboardProduct(data.products);
        } catch (error) {
            console.log(error);
        }
    };
    const getDashboardOverview = async () => {
        try {
            let value = await axios.get(`${env.api}/inventory/dashboard-overview`);
            const { data } = value;
            setDashboardOverview(data);
        } catch (error) {
            console.log(error);
        }
    };


    const getUser = async () => {
        try {
            let value = await axios.get(`${env.api}/user/user-details`);
            const { data } = value;
            setUser(data.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getOrder = async () => {
        try {
            let value = await axios.get(`${env.api}/orders/view-order`);
            const { data } = value;
            setOrder(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminContext.Provider value={{
            username, setUsername, brand, open, setOpen, getBrand, addBrand, editBrand, deleteBrand, category, addCategory, editCategory, deleteCategory,
            products, getproducts, addProduct, editProduct, deleteProduct, dashboardProduct, dashboardOverview, getCategory, user, getUser, order
        }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContext;
