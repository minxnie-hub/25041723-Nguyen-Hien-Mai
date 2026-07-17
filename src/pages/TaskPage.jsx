import {
  ArrowLeft,
  ArrowRight,
  Check,
  FilePdf,
  Folder,
  LinkSimple,
  MagnifyingGlass,
  ShieldCheck,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { asset, getTask, tasks } from "../data/tasks";
import NotFoundPage from "./NotFoundPage";

function Section({ title, children, className = "" }) {
  return (
    <section className={`report-section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="report-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PromptCard({ level, children }) {
  return (
    <article className="prompt-card">
      <strong>{level}</strong>
      <p>{children}</p>
    </article>
  );
}

function TaskOneContent() {
  const steps = [
    ["Mở File Explorer", "Nhấn Windows + E hoặc nhấp vào biểu tượng thư mục trên thanh tác vụ."],
    ["Truy cập ổ đĩa hoặc thư mục", "Mở This PC, chọn ổ đĩa không phải ổ hệ thống. Nếu chỉ có ổ C:, vào thư mục Documents."],
    ["Tạo thư mục mới", "Nhấp chuột phải vào khoảng trống, chọn New, Folder và đặt tên ThucHanh_hotensinhvien."],
    ["Mở thư mục vừa tạo", "Nhấp đúp vào thư mục ThucHanh_NguyenVanA theo ví dụ trong báo cáo."],
    ["Tạo tệp văn bản", "Chọn New, Text Document và đặt tên GhiChu.txt."],
    ["Đổi tên tệp", "Đổi GhiChu.txt thành GhiChuQuanTrong.txt bằng lệnh Rename."],
    ["Tạo thư mục con", "Trong thư mục thực hành, tạo thư mục mới tên TaiLieu."],
    ["Sao chép tệp", "Copy GhiChuQuanTrong.txt rồi Paste một bản sao vào thư mục TaiLieu."],
    ["Di chuyển tệp", "Tạo DiChuyen.txt, dùng Cut và Paste để chuyển tệp vào TaiLieu."],
    ["Xóa tệp", "Xóa GhiChuQuanTrong.txt để tệp được chuyển vào Recycle Bin."],
    ["Xóa vĩnh viễn", "Chọn DiChuyen.txt, giữ Shift và nhấn Delete để bỏ qua Recycle Bin."],
    ["Khôi phục tệp", "Mở Recycle Bin, chọn GhiChuQuanTrong.txt và dùng Restore để đưa tệp về vị trí ban đầu."],
  ];

  return (
    <>
      <Section title="Mục tiêu thực hành">
        <p>
          Bài thực hành đi qua toàn bộ vòng đời cơ bản của một tệp trên Windows: tạo, đặt tên, sao chép, di chuyển, xóa và khôi phục.
        </p>
        <div className="report-callout">
          <Folder aria-hidden="true" />
          <p>Cấu trúc được dùng trong bài gồm thư mục thực hành, thư mục con TaiLieu và các tệp văn bản minh họa.</p>
        </div>
      </Section>
      <Section title="Quy trình 12 bước" className="wide-section">
        <ol className="step-list">
          {steps.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Điểm phân biệt cần nhớ">
        <div className="compare-pair">
          <article>
            <h3>Copy & Paste</h3>
            <p>Tạo thêm một bản sao. Tệp gốc vẫn còn ở vị trí ban đầu.</p>
          </article>
          <article>
            <h3>Cut & Paste</h3>
            <p>Di chuyển tệp. Tệp biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.</p>
          </article>
        </div>
      </Section>
    </>
  );
}

function TaskTwoContent() {
  return (
    <>
      <Section title="Vấn đề nghiên cứu">
        <p>
          Báo cáo phân tích ảnh hưởng của kỹ năng quản lý thời gian đến hành vi trì hoãn học tập của sinh viên. Trì hoãn được xem là một thất bại trong khả năng tự điều chỉnh hành vi, không chỉ là vấn đề ý thức cá nhân.
        </p>
        <blockquote>
          Khi deadline còn xa, động lực thấp và người học dễ trì hoãn. Khi deadline đến gần, áp lực tăng và hành vi mới được kích hoạt.
        </blockquote>
      </Section>
      <Section title="Mục tiêu của báo cáo">
        <BulletList
          items={[
            "Phân tích mối quan hệ giữa quản lý thời gian và hành vi trì hoãn.",
            "Làm rõ tác động đến kết quả học tập và sức khỏe tâm lý.",
            "Đánh giá độ tin cậy của các nguồn tài liệu liên quan.",
            "Đề xuất những giải pháp có thể áp dụng trong học tập.",
          ]}
        />
      </Section>
      <Section title="Những phát hiện chính" className="wide-section">
        <div className="finding-layout">
          <article className="finding-primary">
            <MagnifyingGlass aria-hidden="true" />
            <h3>Mối tương quan nghịch</h3>
            <p>
              Sinh viên có kỹ năng tổ chức thời gian tốt thường chủ động hoàn thành nhiệm vụ, ít chịu áp lực deadline và duy trì hiệu suất ổn định hơn.
            </p>
          </article>
          <div className="finding-notes">
            <article>
              <h3>Ảnh hưởng học tập</h3>
              <p>Trì hoãn làm bài trễ, giảm chất lượng chuẩn bị, tạo thói quen học dồn và làm yếu kỹ năng tự học.</p>
            </article>
            <article>
              <h3>Ảnh hưởng tâm lý</h3>
              <p>Trì hoãn có liên hệ với căng thẳng, lo âu và suy giảm động lực, tạo vòng lặp trì hoãn, áp lực rồi tiếp tục trì hoãn.</p>
            </article>
          </div>
        </div>
      </Section>
      <Section title="Giải pháp được đề xuất">
        <BulletList
          items={[
            "Lập kế hoạch học tập chi tiết theo ngày hoặc tuần.",
            "Chia nhỏ nhiệm vụ để giảm cảm giác quá tải.",
            "Áp dụng kỹ thuật Pomodoro để duy trì tập trung.",
            "Thiết lập mục tiêu ngắn hạn và hạn chế mạng xã hội khi học.",
          ]}
        />
      </Section>
      <Section title="Đánh giá nguồn">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Tài liệu</th><th>Loại</th><th>Độ tin cậy</th><th>Nhận xét</th></tr>
            </thead>
            <tbody>
              <tr><td>BMC Psychology (2024)</td><td>Bài báo</td><td>5/5</td><td>Peer-review, dữ liệu mạnh</td></tr>
              <tr><td>Frontiers in Education (2025)</td><td>Review</td><td>5/5</td><td>Tổng hợp nhiều nghiên cứu</td></tr>
              <tr><td>Current Psychology (2023)</td><td>Bài báo</td><td>5/5</td><td>Phương pháp rõ ràng</td></tr>
              <tr><td>MDPI Children (2023)</td><td>Review</td><td>4/5</td><td>Open access, đáng tin</td></tr>
              <tr><td>Journal of Social Sciences (2021)</td><td>Bài báo</td><td>4/5</td><td>Có phân tích thống kê</td></tr>
              <tr><td>BICC Proceedings</td><td>Hội thảo</td><td>3/5</td><td>Độ tin cậy trung bình</td></tr>
              <tr><td>arXiv (2025)</td><td>Preprint</td><td>3/5</td><td>Chưa phản biện</td></tr>
              <tr><td>Wikipedia</td><td>Nguồn mở</td><td>2/5</td><td>Chỉ dùng để tham khảo</td></tr>
              <tr><td>Pomodoro Technique</td><td>Nguồn mở</td><td>2/5</td><td>Không phải nguồn học thuật</td></tr>
              <tr><td>Springer Study</td><td>Bài báo</td><td>5/5</td><td>Uy tín cao</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="Danh mục tài liệu tham khảo">
        <ol className="reference-list">
          <li>Codina, N. et al. (2024). <i>Time perspectives and procrastination in university students</i>. BMC Psychology.</li>
          <li>Patzak, A., Zhang, X. &amp; Vytasek, J. (2025). <i>Boosting productivity through time management</i>. Frontiers in Education.</li>
          <li>García-Ros, R. et al. (2023). <i>Self-regulated learning and procrastination</i>. Current Psychology.</li>
          <li>González-Brignardello, M. (2023). <i>Academic procrastination in children and adolescents</i>. Children.</li>
          <li>Arıbaş, A.N. (2021). <i>Time management and academic procrastination</i>. Journal of Social Sciences.</li>
          <li>Fu, Y. et al. (2025). <i>Time management and student engagement</i>. BMC Psychology.</li>
          <li>Saputri, M. et al. (2024). <i>Time management and procrastination</i>. BICC Proceedings.</li>
          <li>Steel, P. &amp; König, C. (2006). <i>Temporal Motivation Theory</i>.</li>
          <li>Cirillo, F. (1980s). <i>Pomodoro Technique</i>.</li>
          <li>Zhang, R. et al. (2025). <i>Procrastination learning through games</i>. arXiv.</li>
        </ol>
      </Section>
      <Section title="Kết luận">
        <p>
          Các bằng chứng được tổng hợp cho thấy kỹ năng quản lý thời gian có vai trò quan trọng trong việc kiểm soát hành vi trì hoãn. Lập kế hoạch, theo dõi tiến độ và tự kiểm soát là những kỹ năng cần được rèn luyện trong môi trường đại học.
        </p>
      </Section>
    </>
  );
}

function TaskThreeContent() {
  return (
    <>
      <Section title="Ba tác vụ được thử nghiệm">
        <BulletList items={["Tóm tắt tài liệu học thuật.", "Giải thích khái niệm phức tạp.", "Tạo câu hỏi ôn tập."]} />
      </Section>
      <Section title="Tóm tắt tài liệu" className="wide-section">
        <div className="prompt-ladder">
          <PromptCard level="Cơ bản">Hãy tóm tắt bài viết này.</PromptCard>
          <PromptCard level="Cải tiến">Hãy tóm tắt bài viết dưới đây trong khoảng 150 từ và tập trung vào các ý chính.</PromptCard>
          <PromptCard level="Nâng cao">
            Bạn là trợ giảng đại học. Hãy xác định chủ đề chính, tóm tắt các luận điểm quan trọng bằng gạch đầu dòng và dùng ngôn ngữ dễ hiểu cho sinh viên năm nhất.
          </PromptCard>
        </div>
      </Section>
      <Section title="Giải thích khái niệm" className="wide-section">
        <div className="prompt-ladder">
          <PromptCard level="Cơ bản">Giải thích định luật vạn vật hấp dẫn.</PromptCard>
          <PromptCard level="Cải tiến">
            Hãy giải thích định luật vạn vật hấp dẫn theo cách dễ hiểu cho học sinh THPT và đưa ví dụ thực tế.
          </PromptCard>
          <PromptCard level="Nâng cao">
            Bạn là giáo viên vật lý THPT. Hãy giải thích bằng ngôn ngữ đơn giản, ví dụ gần gũi và trình bày từ dễ đến khó.
          </PromptCard>
        </div>
      </Section>
      <Section title="Tạo câu hỏi ôn tập" className="wide-section">
        <div className="prompt-ladder">
          <PromptCard level="Cơ bản">Hãy tạo câu hỏi ôn tập về biến đổi khí hậu.</PromptCard>
          <PromptCard level="Cải tiến">
            Hãy tạo 10 câu hỏi ôn tập về biến đổi khí hậu gồm câu hỏi trắc nghiệm và tự luận ngắn.
          </PromptCard>
          <PromptCard level="Nâng cao">
            Bạn là giảng viên đại học. Hãy tạo 5 câu nhận biết, 3 câu vận dụng và 2 câu phản biện, kèm đáp án ngắn gọn và độ khó tăng dần.
          </PromptCard>
        </div>
      </Section>
      <Section title="So sánh hiệu quả">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tiêu chí</th><th>Cơ bản</th><th>Cải tiến</th><th>Nâng cao</th></tr></thead>
            <tbody>
              <tr><td>Độ rõ ràng</td><td>Thấp</td><td>Khá rõ</td><td>Rất rõ</td></tr>
              <tr><td>Mức độ chi tiết</td><td>Ít</td><td>Trung bình</td><td>Cao</td></tr>
              <tr><td>Chất lượng phản hồi</td><td>Chung chung</td><td>Phù hợp hơn</td><td>Chính xác và sâu</td></tr>
              <tr><td>Tính cá nhân hóa</td><td>Gần như không có</td><td>Có một phần</td><td>Rất tốt</td></tr>
              <tr><td>Khả năng kiểm soát đầu ra</td><td>Thấp</td><td>Trung bình</td><td>Cao</td></tr>
              <tr><td>Cấu trúc câu trả lời</td><td>Đơn giản</td><td>Logic hơn</td><td>Có hệ thống</td></tr>
              <tr><td>Hiệu quả học tập</td><td>Chưa tối ưu</td><td>Tốt</td><td>Tốt nhất</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="Nguyên tắc rút ra">
        <BulletList
          items={[
            "Xác định rõ mục tiêu của yêu cầu.",
            "Chỉ rõ đối tượng người học để AI điều chỉnh cách diễn đạt.",
            "Yêu cầu cấu trúc đầu ra cụ thể và dễ kiểm tra.",
            "Sử dụng role prompting khi vai trò giúp định hình câu trả lời.",
            "Chia nhiệm vụ thành từng bước và đặt giới hạn cần thiết.",
          ]}
        />
      </Section>
    </>
  );
}

function TaskFourContent() {
  return (
    <>
      <Section title="Bối cảnh dự án">
        <div className="project-identity">
          <UsersThree aria-hidden="true" />
          <div>
            <h3>Nhóm 03</h3>
            <p>Ứng dụng Trí tuệ nhân tạo trong việc tối ưu hóa hiệu suất học tập của sinh viên.</p>
          </div>
        </div>
        <p>
          Mai phụ trách nghiên cứu lý thuyết, tổng hợp tài liệu tham khảo và hỗ trợ soạn thảo nội dung báo cáo. Phần tài liệu của cá nhân cũng được quản lý trên hệ thống lưu trữ chung.
        </p>
      </Section>
      <Section title="Ba công cụ hợp tác" className="wide-section">
        <div className="tool-row">
          <article><strong>Trello</strong><p>Phân công nhiệm vụ, theo dõi To Do, Doing, Done và gắn nhãn mức độ ưu tiên.</p></article>
          <article><strong>Google Docs</strong><p>Cùng soạn thảo theo thời gian thực, dùng Comment và Version History để trao đổi.</p></article>
          <article><strong>Google Drive</strong><p>Lưu tài liệu, ảnh minh chứng và phiên bản báo cáo trong kho chung của nhóm.</p></article>
        </div>
      </Section>
      <Section title="Nhiệm vụ cá nhân">
        <BulletList
          items={[
            "Tìm kiếm tài liệu về AI trong giáo dục.",
            "Tổng hợp lợi ích và hạn chế của AI đối với sinh viên.",
            "Soạn thảo phần cơ sở lý thuyết của báo cáo.",
            "Kiểm tra và chỉnh sửa nội dung trước khi hoàn thiện.",
          ]}
        />
        <p>
          Mỗi nhiệm vụ có mô tả, checklist và thời hạn cụ thể. Trạng thái công việc được cập nhật từ To Do sang Doing rồi Done khoảng 3-4 lần mỗi tuần để cả nhóm theo dõi.
        </p>
      </Section>
      <Section title="Cách tổ chức tài nguyên">
        <div className="folder-tree" aria-label="Cấu trúc thư mục của dự án">
          <strong>[NHÓM 03] - DỰ ÁN AI</strong>
          <span>Thư mục cá nhân</span>
          <span>Tài liệu tham khảo</span>
          <span>Dữ liệu thô và ảnh minh chứng</span>
          <span>Sản phẩm hoàn thiện</span>
        </div>
        <p>
          Nhóm áp dụng quy tắc đặt tên thống nhất. Nhóm trưởng có quyền Editor, các thành viên khác nhận quyền Viewer hoặc Commenter phù hợp.
        </p>
      </Section>
      <Section title="Đánh giá công cụ" className="wide-section">
        <div className="evaluation-grid">
          <article><h3>Trello</h3><p><b>Ưu:</b> trực quan, dễ theo dõi và phân công.</p><p><b>Hạn chế:</b> nhiều thẻ có thể làm bảng rối.</p></article>
          <article><h3>Google Docs</h3><p><b>Ưu:</b> chỉnh sửa đồng thời, tự lưu, nhận xét trực tiếp.</p><p><b>Hạn chế:</b> có thể lỗi định dạng khi nhiều người cùng sửa.</p></article>
          <article><h3>Google Drive</h3><p><b>Ưu:</b> lưu trữ tập trung, dễ chia sẻ và tìm kiếm.</p><p><b>Hạn chế:</b> phụ thuộc kết nối Internet.</p></article>
        </div>
      </Section>
      <Section title="Thách thức và cách xử lý">
        <ol className="challenge-list">
          <li><strong>Phản hồi không đồng đều:</strong> gắn thẻ đúng thành viên và ghi rõ thời gian cần phản hồi.</li>
          <li><strong>Xung đột nội dung:</strong> dùng Comment và Version History để góp ý hoặc khôi phục.</li>
          <li><strong>Nhiều tài liệu:</strong> phân loại theo thư mục và dùng quy tắc đặt tên thống nhất.</li>
        </ol>
      </Section>
    </>
  );
}

function TaskFiveContent() {
  return (
    <>
      <Section title="Ý tưởng dự án">
        <p>
          Là người đang học tiếng Trung, Mai thường gặp khó khăn khi ghi nhớ từ vựng, phân biệt từ gần nghĩa, hiểu ngữ pháp và luyện giao tiếp. Vì vậy, dự án chọn chủ đề ứng dụng AI trong việc học tiếng Trung của học sinh hiện nay.
        </p>
        <div className="report-callout">
          <Sparkle aria-hidden="true" />
          <p>Ba công cụ được sử dụng là ChatGPT, Gemini và Canva AI, phụ trách lần lượt nội dung, hình ảnh và trình bày.</p>
        </div>
      </Section>
      <Section title="Quy trình sáng tạo" className="wide-section">
        <div className="creative-flow">
          <article><span>ChatGPT</span><h3>Định hình nội dung</h3><p>Lập dàn ý, phát triển bài viết và giải thích sự khác nhau giữa <i lang="zh-Hans">尽管</i>, <i lang="zh-Hans">哪怕</i> và <i lang="zh-Hans">即使</i>.</p></article>
          <article><span>Gemini</span><h3>Tạo hình minh họa</h3><p>Tạo hình một học sinh Việt Nam học tiếng Trung với sự hỗ trợ của AI trên máy tính.</p></article>
          <article><span>Canva AI</span><h3>Thiết kế infographic</h3><p>Đề xuất bố cục và thành phần, sau đó được chỉnh màu, nội dung và cách sắp xếp.</p></article>
        </div>
      </Section>
      <Section title="So sánh ba công cụ">
        <div className="tool-comparison">
          <p><strong>ChatGPT:</strong> mạnh về xử lý ngôn ngữ, giải thích ngữ pháp, đưa ví dụ và phát triển ý tưởng.</p>
          <p><strong>Gemini:</strong> chuyển mô tả thành hình minh họa nhanh, nhưng vẫn cần chọn lọc kết quả.</p>
          <p><strong>Canva AI:</strong> rút ngắn thời gian thiết kế, nhưng dùng nguyên mẫu có thể làm sản phẩm thiếu cá nhân hóa.</p>
        </div>
      </Section>
      <Section title="Bài viết: AI đã thay đổi cách tôi học tiếng Trung như thế nào?" className="article-section">
        <p>
          Trong thời đại công nghệ số, AI đã trở thành một công cụ hỗ trợ giúp người học tiếp cận kiến thức nhanh và thuận tiện hơn. Với Mai, AI không chỉ giải quyết một số khó khăn mà còn thay đổi cách tiếp cận và rèn luyện tiếng Trung mỗi ngày.
        </p>
        <p>
          Khi mới học, hệ thống chữ Hán và lượng từ vựng lớn khiến việc ghi nhớ trở nên khó. Nhiều từ và cấu trúc gần giống nhau cũng dễ gây nhầm lẫn. Trước đây, mỗi điểm kiến thức khó thường cần tra cứu từ nhiều nguồn và không phải lúc nào cũng có lời giải thích phù hợp.
        </p>
        <p>
          Với ChatGPT và Gemini, Mai có thể hỏi trực tiếp để được giải thích ngữ pháp, xem ví dụ và đặt từ vào ngữ cảnh. Khi gặp một từ mới, Mai không chỉ hỏi nghĩa mà còn yêu cầu ví dụ, từ đồng nghĩa hoặc tình huống giao tiếp. Cách này giúp hiểu cách dùng thay vì chỉ học thuộc lòng.
        </p>
        <div className="chinese-note">
          <span lang="zh-Hans">尽管</span>
          <span lang="zh-Hans">即使</span>
          <span lang="zh-Hans">哪怕</span>
          <p>
            <i lang="zh-Hans">尽管</i> thường nói về một sự việc có thật. <i lang="zh-Hans">即使</i> và <i lang="zh-Hans">哪怕</i> mang tính giả định, trong đó <i lang="zh-Hans">哪怕</i> nhấn mạnh trường hợp cực đoan hơn.
          </p>
        </div>
        <p>
          AI còn có thể đóng vai người bản ngữ để mô phỏng hội thoại về giới thiệu bản thân, hỏi đường, mua sắm hoặc sở thích. Nhờ đó, Mai có thêm cơ hội thực hành ngay cả khi chưa có môi trường giao tiếp thực tế.
        </p>
        <p>
          Khi luyện viết, AI hỗ trợ kiểm tra ngữ pháp, cách dùng từ và gợi ý diễn đạt tự nhiên hơn, đồng thời giải thích nguyên nhân để tránh lặp lại lỗi. Gemini được dùng để tạo hình minh họa, còn Canva AI hỗ trợ thiết kế infographic tóm tắt các ứng dụng của AI trong học tập.
        </p>
        <p>
          Dù vậy, câu trả lời của AI có thể chưa hoàn toàn chính xác hoặc chưa phù hợp với trình độ người học. Nếu phụ thuộc quá mức, người học có thể giảm khả năng tự nghiên cứu và tư duy độc lập. Vì vậy, AI cần được kết hợp với sách, giáo viên và sự chủ động của chính người học.
        </p>
        <p>
          Tóm lại, AI đã mang lại nhiều thay đổi tích cực trong quá trình học tiếng Trung: từ học từ vựng, ngữ pháp, luyện hội thoại đến sửa lỗi viết. AI là một trợ lý hữu ích, nhưng hiệu quả lâu dài vẫn phụ thuộc vào việc người học tự luyện tập, kiểm chứng và chịu trách nhiệm với sản phẩm cuối cùng.
        </p>
      </Section>
      <Section title="Vai trò của người học">
        <blockquote>
          AI giúp tạo bản nháp ban đầu. Giá trị cuối cùng vẫn phụ thuộc vào việc con người đánh giá, chọn lọc, kiểm chứng và chỉnh sửa.
        </blockquote>
      </Section>
    </>
  );
}

function TaskSixContent() {
  const principles = [
    "Sử dụng AI như công cụ hỗ trợ, không thay thế tư duy cá nhân.",
    "Luôn kiểm tra và chỉnh sửa nội dung do AI tạo ra.",
    "Minh bạch trong việc khai báo sử dụng AI trong học tập.",
    "Không nộp nguyên văn nội dung do AI tạo ra.",
    "Ưu tiên phát triển năng lực cá nhân trước khi nhờ AI hỗ trợ.",
    "Dùng AI cho mục đích học tập, không nhằm gian lận.",
    "Tôn trọng quy định học thuật và quyền sở hữu trí tuệ.",
  ];

  return (
    <>
      <Section title="Bối cảnh và chính sách">
        <p>
          Báo cáo xem xét việc dùng các công cụ như ChatGPT, Gemini và Copilot trong học tập đại học. AI có thể hỗ trợ tìm ý tưởng, viết, tóm tắt và học ngoại ngữ, nhưng cũng làm xuất hiện rủi ro gian lận, đạo văn và suy giảm tư duy độc lập.
        </p>
        <p>
          Các nguyên tắc đạo đức học thuật của Đại học Quốc gia Hà Nội nhấn mạnh tính trung thực, không sao chép, phản ánh đúng năng lực cá nhân và minh bạch khi dùng công cụ hỗ trợ. Báo cáo nhận xét rằng hướng dẫn cụ thể về AI vẫn cần được cập nhật.
        </p>
      </Section>
      <Section title="Nhiệm vụ có AI hỗ trợ" className="wide-section">
        <div className="prompt-process">
          <article>
            <strong>Prompt ban đầu</strong>
            <p>Hãy tạo dàn ý bài luận tiếng Việt về ảnh hưởng của AI trong giáo dục, gồm ba phần: mở bài, thân bài và kết luận.</p>
          </article>
          <ArrowRight aria-hidden="true" />
          <article>
            <strong>Prompt cải tiến</strong>
            <p>Hãy viết lại dàn ý trên theo hướng học thuật hơn, bổ sung ví dụ minh họa thực tế và thêm góc nhìn phản biện.</p>
          </article>
        </div>
        <p>
          Kết quả AI được dùng như một khung ý tưởng ban đầu. Sau đó, người thực hiện bổ sung trải nghiệm cá nhân, viết lại theo phong cách học thuật, bỏ ý trùng lặp và điều chỉnh theo yêu cầu bài học.
        </p>
      </Section>
      <Section title="Ranh giới đạo đức">
        <div className="ethics-split">
          <article>
            <h3>Hỗ trợ hợp lý</h3>
            <p>Dùng AI để gợi ý ý tưởng, kiểm tra ngữ pháp, tóm tắt tài liệu hoặc mở rộng hướng suy nghĩ.</p>
          </article>
          <article>
            <h3>Gian lận học thuật</h3>
            <p>Dùng AI viết toàn bộ bài rồi nộp như sản phẩm cá nhân, không kiểm tra và không khai báo.</p>
          </article>
        </div>
        <blockquote>Ranh giới quan trọng nằm ở việc AI hỗ trợ tư duy hay thay thế tư duy của người học.</blockquote>
      </Section>
      <Section title="Quyền sở hữu trí tuệ và trích dẫn">
        <p>
          AI không được xem là tác giả hợp pháp của nội dung. Người sử dụng vẫn chịu trách nhiệm học thuật, cần khai báo mức độ hỗ trợ của AI và tránh tạo hiểu lầm về nguồn gốc ý tưởng.
        </p>
        <div className="report-callout">
          <LinkSimple aria-hidden="true" />
          <p>Trong bài, ChatGPT được ghi nhận là công cụ hỗ trợ xây dựng dàn ý; toàn bộ nội dung cuối cùng đã được người thực hiện đánh giá, chỉnh sửa và chịu trách nhiệm.</p>
        </div>
      </Section>
      <Section title="Tác động đến quá trình học">
        <div className="compare-pair">
          <article><h3>Tích cực</h3><p>Tăng tốc độ tiếp cận kiến thức, hỗ trợ mở rộng ý tưởng và giúp việc học linh hoạt hơn.</p></article>
          <article><h3>Rủi ro</h3><p>Giảm khả năng viết và tư duy độc lập, gây phụ thuộc, hạn chế sáng tạo nếu bị lạm dụng.</p></article>
        </div>
      </Section>
      <Section title="Bảy nguyên tắc cá nhân" className="wide-section">
        <ol className="principle-grid">
          {principles.map((principle, index) => (
            <li key={principle}><span>{index + 1}</span><p>{principle}</p></li>
          ))}
        </ol>
      </Section>
      <Section title="Thông điệp kết">
        <div className="responsible-message">
          <ShieldCheck aria-hidden="true" />
          <p>AI hỗ trợ bạn học, không học thay bạn.</p>
        </div>
      </Section>
    </>
  );
}

function TaskContent({ taskId }) {
  const content = {
    1: <TaskOneContent />,
    2: <TaskTwoContent />,
    3: <TaskThreeContent />,
    4: <TaskFourContent />,
    5: <TaskFiveContent />,
    6: <TaskSixContent />,
  };

  return content[taskId];
}

function EvidenceGallery({ task }) {
  const images = Array.from({ length: task.pages }, (_, index) => ({
    src: `evidence/task${task.id}/page-${index + 1}.png`,
    label: `Trang ${index + 1}`,
  }));

  const supporting = task.id === 5
    ? Array.from({ length: 6 }, (_, index) => ({
        src: `evidence/task5-ref/page-${index + 1}.png`,
        label: `Minh chứng ${index + 1}`,
      }))
    : [];

  const renderStrip = (items) => (
    <div className="evidence-strip">
      {items.map((item) => (
        <a href={asset(item.src)} target="_blank" rel="noreferrer" key={item.src}>
          <img src={asset(item.src)} alt={`${item.label} của bài ${task.id}`} width="910" height="1287" loading="lazy" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );

  return (
    <section className="evidence-section" aria-labelledby="evidence-title">
      <div className="evidence-heading">
        <h2 id="evidence-title">Tài liệu và minh chứng</h2>
        <p>Các trang được giữ nguyên để đối chiếu với phần trình bày trên web. Kéo ngang và nhấp vào ảnh để xem rõ hơn.</p>
      </div>
      {renderStrip(images)}
      {supporting.length > 0 && (
        <>
          <h3 className="supporting-title">Minh chứng tham khảo AI</h3>
          {renderStrip(supporting)}
        </>
      )}
    </section>
  );
}

export default function TaskPage() {
  const { taskId } = useParams();
  const task = getTask(taskId);
  if (!task) return <NotFoundPage />;

  const previous = tasks[task.id - 2];
  const next = tasks[task.id];

  return (
    <div className={`site-shell task-shell tone-page-${task.tone}`}>
      <SiteHeader compact />
      <main className="task-page">
        <div className="task-breadcrumb">
          <Link to="/" state={{ anchor: "projects" }}><ArrowLeft aria-hidden="true" /> Sáu bài tập</Link>
          <span>Bài {task.id}</span>
        </div>

        <header className="task-hero">
          <div className="task-hero-copy">
            <span className="task-hero-number">{String(task.id).padStart(2, "0")}</span>
            <h1>{task.title}</h1>
            <p>{task.summary}</p>
            <div className="task-meta">
              <span>{task.pages} trang tài liệu</span>
              <span>Có minh chứng gốc</span>
            </div>
            <div className="task-document-links">
              <a className="button button-primary" href={asset(task.pdf)} target="_blank" rel="noreferrer">
                <FilePdf aria-hidden="true" /> PDF gốc
              </a>
              {task.evidencePdf && (
                <a className="button button-quiet" href={asset(task.evidencePdf)} target="_blank" rel="noreferrer">
                  <LinkSimple aria-hidden="true" /> PDF minh chứng
                </a>
              )}
            </div>
          </div>
          <figure className="task-hero-visual">
            <img src={asset(task.cover)} alt={`Trang minh chứng tiêu biểu của bài ${task.id}`} width="910" height="1287" />
            <figcaption>{task.note}</figcaption>
          </figure>
        </header>

        <article className="report-body">
          <TaskContent taskId={task.id} />
        </article>

        <EvidenceGallery task={task} />

        <nav className="task-pagination" aria-label="Chuyển giữa các bài tập">
          {previous ? (
            <Link to={`/bai-tap/${previous.id}`}>
              <ArrowLeft aria-hidden="true" />
              <span><small>Bài trước</small>{previous.shortTitle}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/bai-tap/${next.id}`}>
              <span><small>Bài tiếp</small>{next.shortTitle}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ) : (
            <Link to="/" state={{ anchor: "summary" }}>
              <span><small>Hoàn tất</small>Xem tổng kết</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          )}
        </nav>
      </main>
      <footer className="site-footer compact-footer">
        <p>Nguyễn Hiền Mai - MSSV 25041723</p>
        <Link to="/" state={{ anchor: "projects" }}>Danh mục bài tập <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
