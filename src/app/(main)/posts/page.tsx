import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';
import PostTable from '@/components/posts/PostTable';

export default function PostsPage() {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <PostTable />
      <PostPagination />
    </>
  );
}
