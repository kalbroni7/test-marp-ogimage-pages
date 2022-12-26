import { GetStaticProps, GetStaticPaths } from 'next'

export default function Samples() {
  return (
    <div>
      <a href="../">[Home]</a>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }
}
