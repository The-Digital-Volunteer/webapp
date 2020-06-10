import { inject, observer } from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class TermsPagination extends React.Component {
    page1;
    page2;
    page3;
    page4;
    registration;

    constructor(props) {
        super(props)

        this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind( this )
        this.registration = props;

        this.page1 = [
            <div className="text-box">
                <h3>Terms and conditions</h3>
            </div>,

            <h2>What will we collect?</h2>,
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
            </p>,

            <h2>Do you want to know more?</h2>,
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. <a href="#more">Read More ></a>
            </p>,
            <Form>
                <Form.Group>
                    <Form.Check type="checkbox" name="termsOfService"
                                label="I agree to the terms and conditions"
                                checked={ this.registration.termsOfServiceAccepted }
                                onClick={ this.changeTermsOfServiceFlag }
                    />
                </Form.Group>
            </Form>,

            <div className="mt-4">
                <Link to="/registration/alternatives">
                    <Button className="btn btn-block helper-btn"
                            disabled={ !this.registration.termsOfServiceAccepted }
                    >
                        Next - Sign in
                    </Button>
                </Link>
            </div>
        ];

        this.page2 = [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        ];

        this.page3 = [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
            "Aenean massa."
        ];

        this.page4 = [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
            "Aenean massa. Cum sociis natoque penatibus."
        ];

        this.state = {
            todos: [this.page1, this.page2, this.page3, this.page4],
            currentPage: 1,
            todosPerPage: 1
        };

        this.handleClick = this.handleClick.bind(this);
    }

    changeTermsOfServiceFlag(event) {
        const { registration } = this.props;

        registration.termsOfServiceAccepted = event.target.checked
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id),
        });
    }

    render() {
        {/* TODO: add test as soon as registration steps are completed */}

        const { todos, currentPage, todosPerPage } = this.state;

        let btn_class = this.state.highlighted ? "pagination-highlight" : "pagination";

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                    <div
                        className={btn_class}
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                    </div>
            );
        });

        return (
            <div className="wrapper">
                <div id="pagination-wrapper">
                    <div>
                        <div id="page-total">
                            <p>{currentPage}/4</p>
                        </div>
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
                <div>
                    {renderTodos}
                </div>
            </div>
        );
    }
}

export default inject('registration')( observer(TermsPagination) );
