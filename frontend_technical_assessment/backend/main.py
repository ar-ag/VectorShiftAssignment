# from fastapi import FastAPI, HTTPException, Request
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List, Dict
# import networkx as nx
# import uvicorn

# # Define the data models for nodes and edges
# class Node(BaseModel):
#     id: int  # Only 'id' field for Node

# class Edge(BaseModel):
#     source: int  # Only 'source' and 'target' fields for Edge
#     target: int

# class Pipeline(BaseModel):
#     nodes: List[Node]  # List of Node objects
#     edges: List[Edge]  # List of Edge objects


# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  
#     allow_credentials=True,
#     allow_methods=["*"],  # Allows all HTTP methods
#     allow_headers=["*"],  # Allows all headers
# )

# @app.get('/')
# async def read_root():
#     return {'Ping': 'Pong'}

# @app.post('/pipelines/parse')
# async def parse_pipeline(pipeline: Pipeline):
#     print('helloe from post')
#     nodes = pipeline.nodes
#     edges = pipeline.edges
    
#     # Initialize a directed graph
#     graph = nx.DiGraph()
    
#     # Add nodes and edges to the graph
#     for node in nodes:
#         graph.add_node(node.id)

#     for edge in edges:
#         graph.add_edge(edge.source, edge.target)
    
#     # Calculate the number of nodes and edges
#     num_nodes = graph.number_of_nodes()
#     num_edges = graph.number_of_edges()
    
#     # Check if the graph is a Directed Acyclic Graph (DAG)
#     is_dag = nx.is_directed_acyclic_graph(graph)
    
#     return {
#         'num_nodes': num_nodes,
#         'num_edges': num_edges,
#         'is_dag': is_dag
#     }

# # Run the FastAPI app on port 5000
# if __name__ == '__main__':
#     print('server running at 5000')
#     uvicorn.run(app, host="0.0.0.0", port=5000)
    


from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx
import uvicorn

# Define the data models for nodes and edges
class Node(BaseModel):
    id: str  # Change from int to str for Node id

class Edge(BaseModel):
    source: str  # Change from int to str for source
    target: str  # Change from int to str for target

class Pipeline(BaseModel):
    nodes: List[Node]  # List of Node objects
    edges: List[Edge]  # List of Edge objects

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)
@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    # Initialize a directed graph
    graph = nx.DiGraph()

    # Add nodes and edges to the graph
    for node in nodes:
        graph.add_node(node.id)

    for edge in edges:
        graph.add_edge(edge.source, edge.target)

    # Calculate the number of nodes and edges
    num_nodes = graph.number_of_nodes()
    num_edges = graph.number_of_edges()

    # Check if the graph is a Directed Acyclic Graph (DAG)
    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=5000)
