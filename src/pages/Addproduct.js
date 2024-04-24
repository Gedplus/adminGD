import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../features/pcategory/pcategorySlice";
import {  useParams } from 'react-router-dom';
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts, resetState } from "../features/product/productSlice";
let schema = yup.object().shape({
  title: yup.string().required("Le titre est requis"),
  description: yup.string().required("Une description est requise"),
  price: yup.number().required("Le prix est obligatoire"),

  category: yup.string().required("La catégorie est obligatoire"),
  tags: yup.string().required("La balise est obligatoire"),
 
  quantity: yup.number().required("La quantité est requise"),
  
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { codart } = useParams();
  const { desart } = useParams();
  const { stkfin } = useParams();
  const { PURNTTC } = useParams();
  const getproductId = location.pathname.split("/")[3];
console.log(codart ,"dd")
console.log(desart ,"dd")
console.log(stkfin ,"dd")
console.log(PURNTTC ,"dd")
  const getproductdesart = location.pathname.split("/")[4];
  const getproductstkfin = location.pathname.split("/")[5];
  const getproductPURNTTC = location.pathname.split("/")[6];


  const [images, setImages] = useState([]);

  useEffect(() => {

    dispatch(getCategories());

  }, []);


  const catState = useSelector((state) => state.pCategory.pCategories);

  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Produit ajouté avec succès!");
    }
    if (isError) {
      toast.error("Quelque chose s'est mal passé!");
    }
  }, [isSuccess, isError, isLoading]);


  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {

    formik.values.images = img;
  }, [ img]);
  const formik = useFormik({
    initialValues: {
      codeArt: codart,
      title: desart,
      description: "",
      price: PURNTTC,

      category: "",
      tags: "",

      quantity: stkfin,
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();

      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Ajouter un produit</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Entrez le titre du produit"
            name="title"
            onCh={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            disabled= {true}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Entrez le prix du produit"
            name="price"
            onCh={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
            disabled= {true}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
        
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Choisir une catégorie</option>
            {catState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <select
            name="tags"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>
            Sélectionnez les tags
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>
          <div className="error">
            {formik.touched.tags && formik.errors.tags}
          </div>

     
          <CustomInput
            type="number"
            label="Entrez la quantité de produit"
            name="quantity"
            onCh={formik.handleChange("quantity")}
            onBlr={formik.handleBlur("quantity")}
            val={formik.values.quantity}
            disabled= {true}
          />
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                    Faites glisser et déposez quelques fichiers ici, ou cliquez pour sélectionner des fichiers
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
           Ajouter un produit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;