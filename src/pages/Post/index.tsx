import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'

import { api } from '../../lib/axios'

import { PostContainer, PostHeader, Title, PostBody } from './styles'
import { InfoTags, Tag } from '../../styles/components'

interface PostBodyType {
  number: number
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { issueNumber } = useParams()
  const [post, setPost] = useState<PostBodyType | undefined>(undefined)

  useEffect(() => {
    async function loadIssue() {
      const response: AxiosResponse<PostBodyType> = await api.get(
        `repos/gabrielpapke/github-blog-challenge/issues/${issueNumber}`,
      )

      setPost(response.data)
    }

    loadIssue()
  }, [issueNumber])

  return (
    <PostContainer>
      {post ? (
        <>
          <PostHeader>
            <div className="top-links">
              <NavLink to="/">
                <CaretLeft size={12} weight="bold" />

                <span>Voltar</span>
              </NavLink>

              <a target="_blank" href={post.html_url} rel="noreferrer">
                <span>VER NO GITHUB</span>

                <ArrowSquareOut size={12} weight="bold" />
              </a>
            </div>
            <Title>{post.title}</Title>

            <InfoTags>
              <Tag>
                <GithubLogo size={18} />

                <span>{post.user.login}</span>
              </Tag>

              <Tag>
                <CalendarBlank size={18} />

                <span>
                  {formatDistanceToNow(new Date(post.created_at), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </Tag>

              <Tag>
                <ChatCircle size={18} />

                <span>
                  {post.comments === 1
                    ? `${post.comments} comentário`
                    : `${post.comments} comentários`}
                </span>
              </Tag>
            </InfoTags>
          </PostHeader>
          <PostBody>{post.body}</PostBody>
        </>
      ) : (
        <>Carregando...</>
      )}
    </PostContainer>
  )
}
