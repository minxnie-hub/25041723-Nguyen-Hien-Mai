import {
  ArrowDownRight,
  ArrowRight,
  BookOpenText,
  CheckCircle,
  FlowerLotus,
  FolderOpen,
  Translate,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { asset, tasks } from "../data/tasks";

const heroPhotos = [
  {
    src: "images/profile/mai-1.jpg",
    alt: "Chân dung Nguyễn Hiền Mai đội mũ lưỡi trai",
    className: "hero-photo hero-photo-cap",
  },
  {
    src: "images/profile/mai-3.jpg",
    alt: "Chân dung Nguyễn Hiền Mai với sắc tím nhẹ",
    className: "hero-photo hero-photo-main",
  },
  {
    src: "images/profile/mai-2.jpg",
    alt: "Chân dung Nguyễn Hiền Mai đeo kính",
    className: "hero-photo hero-photo-glasses",
  },
];

const learningNotes = [
  { hanzi: "学", pinyin: "xué", meaning: "học", tone: "rose" },
  { hanzi: "问", pinyin: "wèn", meaning: "hỏi", tone: "butter" },
  { hanzi: "想", pinyin: "xiǎng", meaning: "suy nghĩ", tone: "lilac" },
  { hanzi: "做", pinyin: "zuò", meaning: "thực hành", tone: "cocoa" },
];

const reflections = [
  "Biết tổ chức tệp và tài liệu để làm việc gọn hơn.",
  "Biết kiểm tra nguồn và viết prompt có mục tiêu rõ.",
  "Biết dùng AI như công cụ hỗ trợ, không thay thế tư duy.",
];

function PlumBranch({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 280 170" aria-hidden="true">
      <path d="M22 147C81 119 100 70 151 57c37-10 67 3 106-29" />
      <path d="M83 111c-7-28-1-48 22-68" />
      <path d="M149 58c4-22 18-38 38-49" />
      <g>
        <circle cx="86" cy="104" r="13" />
        <circle cx="111" cy="73" r="11" />
        <circle cx="153" cy="57" r="14" />
        <circle cx="190" cy="31" r="10" />
        <circle cx="225" cy="34" r="13" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <PlumBranch className="hero-branch" />
          <div className="hero-copy">
            <p className="hero-kicker">Nhật ký học kỹ năng số</p>
            <h1 id="hero-title">
              Nguyễn Hiền <span>Mai</span>
            </h1>
            <p className="hero-intro">
              Sinh viên Khoa Ngôn ngữ và Văn hóa Trung Quốc, lưu lại sáu bài thực hành bằng một portfolio nhỏ mang sắc hồng, nâu, vàng và tím pastel.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/" state={{ anchor: "projects" }}>
                Xem sáu bài <ArrowDownRight aria-hidden="true" />
              </Link>
              <Link className="button button-quiet" to="/" state={{ anchor: "about" }}>
                Đọc hồ sơ <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-handline">cute, gần gũi và vẫn đủ rõ ràng để học tập</p>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.11 } },
            }}
            aria-label="Ba ảnh chân dung của Nguyễn Hiền Mai"
          >
            <div className="hero-paper" aria-hidden="true" />
            <div className="hero-grid-lines" aria-hidden="true" />
            {heroPhotos.map((photo) => (
              <motion.figure
                key={photo.src}
                className={photo.className}
                variants={{
                  hidden: { opacity: 0, y: 24, rotate: 0 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="photo-tape" aria-hidden="true" />
                <img src={asset(photo.src)} alt={photo.alt} width="552" height="997" />
              </motion.figure>
            ))}
            <motion.div
              className="hello-note"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ delay: 0.52, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span lang="zh-Hans">你好</span>
              <small>nǐ hǎo</small>
            </motion.div>
            <FlowerLotus className="hero-flower" aria-hidden="true" />
          </motion.div>
        </section>

        <section className="profile-section" id="about" aria-labelledby="about-title">
          <div className="profile-photo-wrap">
            <div className="profile-paper-shadow" aria-hidden="true" />
            <img
              src={asset("images/profile/mai-2.jpg")}
              alt="Nguyễn Hiền Mai đeo kính"
              width="552"
              height="997"
              loading="lazy"
            />
            <p className="profile-photo-note">hồng · nâu · vàng · tím</p>
            <PlumBranch className="profile-branch" />
          </div>

          <div className="profile-copy">
            <p className="section-eyebrow">Hồ sơ cá nhân</p>
            <h2 id="about-title">Một góc nhỏ của Mai</h2>
            <p className="profile-lead">
              Mình là Nguyễn Hiền Mai, sinh viên Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội, theo học Khoa Ngôn ngữ và Văn hóa Trung Quốc.
            </p>
            <dl className="profile-facts">
              <div>
                <dt>Ngày sinh</dt>
                <dd>04/10/2007</dd>
              </div>
              <div>
                <dt>Mã sinh viên</dt>
                <dd>25041723</dd>
              </div>
              <div>
                <dt>Phong cách yêu thích</dt>
                <dd>Pastel, xinh xắn, gần gũi</dd>
              </div>
            </dl>
            <div className="purpose-block">
              <BookOpenText aria-hidden="true" />
              <div>
                <h3>Mục tiêu của portfolio</h3>
                <p>
                  Lưu lại sáu bài tập, minh chứng quá trình và những kỹ năng số mình đã thực hành trong học kỳ.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="language-section" aria-labelledby="language-title">
          <div className="language-heading">
            <Translate aria-hidden="true" />
            <p className="section-eyebrow">Ngôn ngữ và công nghệ</p>
            <h2 id="language-title">Học từng chữ, hiểu từng cách dùng</h2>
            <p>
              Với Mai, công nghệ có ích nhất khi giúp việc học tiếng Trung rõ ràng hơn: tra cứu, so sánh, luyện tập rồi tự kiểm tra lại.
            </p>
          </div>
          <div className="flashcard-track" aria-label="Bốn thẻ từ vựng minh họa quá trình học">
            {learningNotes.map((note, index) => (
              <motion.article
                className={`word-card tone-${note.tone}`}
                key={note.hanzi}
                whileHover={reduceMotion ? undefined : { y: -9, rotate: index % 2 ? 1.5 : -1.5 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <span lang="zh-Hans">{note.hanzi}</span>
                <strong>{note.pinyin}</strong>
                <small>{note.meaning}</small>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading-stack">
            <p className="section-eyebrow">Danh mục bài tập</p>
            <h2 id="projects-title">Sáu bài, sáu cách thực hành</h2>
            <p>Mỗi bài mở thành một trang riêng, giữ nguyên nội dung chính và đi kèm minh chứng gốc để đối chiếu.</p>
          </div>
          <div className="task-grid">
            {tasks.map((task, index) => (
              <motion.article
                className={`task-tile task-tile-${task.id} tone-${task.tone}`}
                key={task.id}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.22), ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="task-tile-copy">
                  <span className="task-number" aria-hidden="true">{String(task.id).padStart(2, "0")}</span>
                  <h3>{task.shortTitle}</h3>
                  <p>{task.summary}</p>
                  <Link to={`/bai-tap/${task.id}`} aria-label={`Mở bài ${task.id}: ${task.title}`}>
                    Mở bài <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
                <div className="task-tile-image">
                  <span className="task-image-tape" aria-hidden="true" />
                  <img
                    src={asset(task.cover)}
                    alt={`Trang minh chứng của bài ${task.id}`}
                    width="910"
                    height="1287"
                    loading="lazy"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="summary-section" id="summary" aria-labelledby="summary-title">
          <div className="summary-title-wrap">
            <p className="hand-note" lang="zh-Hans">慢慢来，也会很快</p>
            <h2 id="summary-title">Những điều ở lại sau sáu bài</h2>
          </div>
          <div className="summary-copy">
            <p className="summary-lead">
              Portfolio này không chỉ gom bài nộp. Nó giúp mình nhìn lại cách đã tìm thông tin, làm việc nhóm, thử prompt và dùng AI có trách nhiệm.
            </p>
            <ul>
              {reflections.map((item) => (
                <li key={item}>
                  <CheckCircle weight="fill" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="next-note">
              <FolderOpen aria-hidden="true" />
              <p>Điều quan trọng nhất là biết giữ lại tài liệu, quá trình và lý do đằng sau mỗi lựa chọn.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span className="brand-monogram">HM</span>
          <p>Nguyễn Hiền Mai</p>
        </div>
        <p>Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
        <Link to="/" state={{ anchor: "projects" }}>
          Xem lại sáu bài <ArrowRight aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}
