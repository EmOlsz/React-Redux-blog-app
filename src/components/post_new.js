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
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>New post:</h1>
        <form>
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
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'CreateNewPost'
})(PostNew);