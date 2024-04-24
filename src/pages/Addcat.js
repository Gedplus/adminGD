import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCategory,
  getAProductCategory,
  resetState,
  updateAProductCategory,
} from "../features/pcategory/pcategorySlice";
import {  useParams } from 'react-router-dom';
let schema = yup.object().shape({
  title: yup.string().required("Le nom de la catégorie est obligatoire"),
});
const Addcat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.pCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
    categoryName,
    updatedCategory,
  } = newCategory;
  useEffect(() => {
    if (id !== undefined) {
      dispatch(getAProductCategory(id));
    } else {
      dispatch(resetState());
    }
  }, [id]);
  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Catégorie ajoutée avec succès!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("Catégorie mise à jour avec succès!");
      navigate("/admin/list-category");
    }
    if (isError) {
      toast.error("Quelque chose s'est mal passé!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (id !== undefined) {
        const data = { id: id, pCatData: values };
        dispatch(updateAProductCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4  title">
        {id !== undefined ? "Edit" : "Add"} Catégorie
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Entrez la catégorie de produit"
            onCh={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            id="brand"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {id !== undefined ? "Edit" : "Add"} Catégorie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;