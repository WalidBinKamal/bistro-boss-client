import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {      
        // img upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        console.log(res.data.success)
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuResponse.data)
            if (menuResponse.data.modifiedCount > 0) {
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="Update Item" subHeading={"Refresh info"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label flex">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            required
                            className="input input-bordered w-full mb-6" />
                    </div>
                    <div className='flex gap-6'>
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label flex">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* Price */}
                        <div className="form-control w-full">
                            <label className="label flex">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full mb-6" />
                        </div>
                    </div>
                    {/* Recipe details */}
                    <label className="form-control">
                        <div className="label flex">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24 w-full mb-6" placeholder="Bio"></textarea>
                    </label>
                    <div className='form-control w-full'>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input w-full mb-6" />
                    </div>
                    <button className="btn">
                        Update Menu Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;