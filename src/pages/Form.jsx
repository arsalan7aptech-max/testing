import React, { useState } from 'react'

const Add = () => {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setProducts([...products, formData])
    console.log("Product Added:", products)
  }
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add Product</h2>

      <form onSubmit={handleSubmit}> 
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>

          <input
            type="text"
            id="email"
            name="email"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>

          <input
            type="text"
            name="password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h3>Products List</h3>
        {products.map((items) => (
          <div>
            <p>Email: {items.email}</p>
            <p>Password: {items.password}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Add