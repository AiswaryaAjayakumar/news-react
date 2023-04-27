import React, { Component } from 'react'
import { Table, TableCell, TableHead,TableContainer,TableRow,TableBody,Grid,Button, Avatar } from '@mui/material'
import axios from 'axios'

export default class TechCrunch extends Component {
    state={
        tech:[]
    }
    fetchNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1b18e760e68349abb00d7c3658220f4f").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState(
                    {
                        tech:response.data.articles
                    }
                )
                
            }
        )
    }
  render() {
    return (
      <div>
         <Grid container style={{padding:85}}>
            <Grid style={{padding:20}}item xs={12}sm={12}md={12}lg={12}xl={12}>
                <Button
                variant='contained'
                fullWidth
                type='submit'
                onClick={this.fetchNews}
                >
                TECH CRUNCH NEWS
                </Button>
            </Grid>
            <Grid style={{padding:5}} item xs={12}sm={12}md={12}lg={12}xl={12}>

     <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Image</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Published At</TableCell>
                    <TableCell>Content</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
               {this.state.tech.map(
                (value,index)=>{
                    return <TableRow>
                        <TableCell>
                        <Avatar variant='square' src={value.urlToImage}/>
                        </TableCell>
                        <TableCell>{value.source.name}</TableCell>
                        <TableCell>{value.author}</TableCell>
                        <TableCell>{value.title}</TableCell>
                        <TableCell>{value.description}</TableCell>
                        <TableCell>{value.publishedAt}</TableCell>
                        <TableCell>{value.content}</TableCell>
                    </TableRow>
                }
               )}
            </TableBody>
        </Table>
     </TableContainer>

            </Grid>
        </Grid>
      </div>
    )
  }
}
