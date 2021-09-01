import React from 'react';
import { Form } from 'react-bootstrap';

class FormItem extends React.Component {
	render() {
		return (
			<Form.Group className="mb-3" controlId={this.props.id}>
				<Form.Label>{this.props.label}</Form.Label>
				<Form.Control
					type={this.props.type}
					value={this.props.field}
					onChange={this.props.change}
					name={this.props.name}
				/>
			</Form.Group>
		);
	}
}

export default FormItem;