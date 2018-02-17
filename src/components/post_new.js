import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <input
          className="form-control"
          placeholder={field.placeholderValue}
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>New post:</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            placeholderValue="Title"
            component={this.renderField}
          />
          <Field
            name="categories"
            placeholderValue="Categories"
            component={this.renderField}
          />
          <Field
            name="content"
            placeholderValue="Content"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {

  const errors = {};

  if (!values.title) errors.title = "Please enter a title";
  if (!values.categories) errors.categories = "Please enter a category";
  if (!values.content) errors.content = "Please enter a content";

  return errors;

}

export default reduxForm({
  validate,
  form: 'CreateNewPost'
})(PostNew);