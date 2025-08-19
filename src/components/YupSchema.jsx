import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name input is required"),
    email: Yup.string()
        .email("Email address entered is invalid")
        .required("Email address is required"),
    position: Yup.string().required("Job position is required"),
});

export default validationSchema;