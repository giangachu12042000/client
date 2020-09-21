import React from 'react'
import {createStructuredSelector,} from 'reselect'
import {withHandlers,withState, lifecycle, compose} from 'recompose'
import {connect} from 'react-redux'
import CategoryView from './categoryView'
import queryString from 'query-string';
import _ from 'lodash';
import {getFetchCate} from '../../../actions/categoryAction'
import categoryReducers from '../../../reducers'

export function mapDispatchToProps(dispatch){
    return{
        fetchCateAll: (params)=> dispatch(getFetchCate(params))
    }
}
const mapStateToProps = createStructuredSelector({
    categories: categoryReducers
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
    withConnect,
    withState('params','setParams',{page:1,size:20}),
    withHandlers({
        fetchCategory:({history, location, match, setParams, fetchCateAll})=>(param)=>{
            const search = location.search
            let params = queryString.parse(search);

            params = {
              ...params,
              ...param
            }
            // check
            params = _.pickBy(params, _.identity);
            const strparams = queryString.stringify(params);
            const url = match.url + '?' + strparams;
            history.push(url)
            setParams(params);
            fetchCateAll(params)
        }
    }),
    lifecycle({
        componentDidMount(props){
            this.props.fetchCategory()
        }
    })
)(CategoryView)