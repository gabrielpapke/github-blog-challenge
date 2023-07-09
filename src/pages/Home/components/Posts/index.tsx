import { FormEvent, useCallback, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

import { api } from '../../../../lib/axios'

import { PostsContainer, Title, SearchForm, Input, Item, Grid } from './styles'

interface PostType {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface SearchResponse {
  total_count: number
  items: PostType[]
}

export function Posts() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)

  const loadPosts = useCallback(async (query: string = '') => {
    const response: AxiosResponse<SearchResponse> = await api({
      method: 'get',
      url: `search/issues?q=${query}%20repo:gabrielpapke/github-blog-challenge`,
    })

    setPosts(response.data.items)
    setTotalCount(response.data.total_count)
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const { value } = event.currentTarget.elements[0] as HTMLInputElement

      loadPosts(value)
    } catch {
      console.error('Erro ao buscar conteúdo')
    }
  }

  return (
    <PostsContainer>
      <SearchForm onSubmit={handleSubmit}>
        <Title>
          <h2>Publicações</h2>

          <span>
            {totalCount === 1
              ? `${totalCount} publicação`
              : `${totalCount} publicações`}
          </span>
        </Title>

        <Input id="search" type="search" placeholder="Buscar conteúdo" />
      </SearchForm>

      <Grid>
        {posts.map((item) => (
          <Item key={item.id}>
            <header>
              <h3>
                <NavLink to={`post/${item.number}`}>{item.title}</NavLink>
              </h3>

              <span>
                {formatDistanceToNow(new Date(item.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
            </header>

            <p>{item.body}</p>
          </Item>
        ))}
      </Grid>
    </PostsContainer>
  )
}
