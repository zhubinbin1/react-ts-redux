import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import "./index.less"
import { SmileOutlined, MinusOutlined, SnippetsOutlined } from '@ant-design/icons';
// import { Icon } from '@ant-design/compatible';
export default class Tabs extends Component {
    render() {
        return (
            <footer>
                <NavLink to="/" exact > <SmileOutlined />首页</NavLink>
                <NavLink to="/mine" > <MinusOutlined />我的</NavLink>
                <NavLink to="/profile"><SnippetsOutlined />个人中心</NavLink>
            </footer>
        )
    }
}
