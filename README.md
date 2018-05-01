# pgp-repos

[![Build Status](https://travis-ci.org/kissmygritts/pgp-repos.svg?branch=master)](https://travis-ci.org/kissmygritts/pgp-repos)

A set of methods to compose repositories for the `pg-promise` library.

## Motivation

I built this little package because I was tired of writting the same functions for every model, or repo that I created for my API. These functions take care of all the boilerplate initialization in order to extend the database object with resource models or repositories.