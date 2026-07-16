import {
  ArrowDownRight,
  ArrowRight,
  BookOpenText,
  CheckCircle,
  FlowerLotus,
  FolderOpen,
  Sparkle,
  Translate,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { asset, tasks } from "../data/tasks";

const heroPhotos = [
  { src: "images/profile/mai-1.jpg", alt: "Chân dung Nguyễn Hiền Mai đội mũ lưỡi trai", className: "hero-photo hero-photo-cap" },
  { src: "images/profile/mai-3.jpg", alt: "Chân dung Nguyễn Hiền Mai với sắc tím nhẹ", className: "hero-photo hero-photo-main" },
  { src: "images/profile/mai-2.jpg", alt: "Chân dung Nguyễn Hiền Mai đeo kính", className: "hero-photo hero-photo-glasses" },
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

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">
              <Sparkle weight="fill" aria-hidden="true" /> Digital portfolio
            </p>
            <h1 id="hero-title">
              Nguyễn Hiền
              <span>Mai</span>
            </h1>
            <p className="hero-intro">
              Sinh viên Ngôn ngữ và Văn hóa Trung Quốc, học kỹ năng số bằng sự tò mò và tinh thần có trách nhiệm.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/" state={{ anchor: "projects" }}>
                Xem 6 bài <ArrowDownRight aria-hidden="true" />
              </Link>
              <Link className="button button-quiet" to="/" state={{ anchor: "about" }}>
                Hồ sơ <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            aria-label="Ba ảnh chân dung của Nguyễn Hiền Mai"
          >
            <div className="hero-color-field" aria-hidden="true" />
            {heroPhotos.map((photo) => (
              <motion.figure
                key={photo.src}
                className={photo.className}
                variants={{
                  hidden: { opacity: 0, y: 28, rotate: 0 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <img src={asset(photo.src)} alt={photo.alt} width="532" height="960" />
              </motion.figure>
            ))}
            <motion.div
              className="hello-note"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.5, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span lang="zh-Hans">你好!</span>
              <small>nǐ hǎo</small>
            </motion.div>
            <FlowerLotus className="hero-flower" aria-hidden="true" />
          </motion.div>
        </section>

        <section className="profile-section" id="about" aria-labelledby="about-title">
          <div className="profile-photo-wrap">
            <img
              src={asset("images/profile/mai-2.jpg")}
              alt="Nguyễn Hiền Mai đeo kính"
              width="532"
              height="960"
              loading="lazy"
            />
            <p className="profile-photo-note">một chút hồng, nâu, vàng và tím</p>
          </div>

          <div className="profile-copy">
            <h2 id="about-title">Một góc nhỏ của Mai</h2>
            <p className="profile-lead">
              Mình là Nguyễn Hiền Mai, sinh viên Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội. Mình theo học Khoa Ngôn ngữ và Văn hóa Trung Quốc.
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
                whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 ? 1 : -1 }}
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
            <h2 id="projects-title">Sáu bài, sáu cách thực hành</h2>
            <p>Mỗi bài mở thành một trang web riêng, có phần trình bày và tài liệu gốc để đối chiếu.</p>
          </div>
          <div className="task-grid">
            {tasks.map((task) => (
              <article className={`task-tile task-tile-${task.id} tone-${task.tone}`} key={task.id}>
                <div className="task-tile-copy">
                  <span className="task-number" aria-hidden="true">{String(task.id).padStart(2, "0")}</span>
                  <h3>{task.shortTitle}</h3>
                  <p>{task.summary}</p>
                  <Link to={`/bai-tap/${task.id}`} aria-label={`Mở bài ${task.id}: ${task.title}`}>
                    Mở bài <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
                <div className="task-tile-image">
                  <img
                    src={asset(task.cover)}
                    alt={`Trang minh chứng của bài ${task.id}`}
                    width="910"
                    height="1287"
                    loading="lazy"
                  />
                </div>
              </article>
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
              <p>
                Điều mình muốn tiếp tục cải thiện là khả năng kiểm chứng nguồn, trình bày nội dung cô đọng và kết hợp công nghệ với việc học ngoại ngữ.
              </p>
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
        <Link to="/" state={{ anchor: "projects" }}>Xem 6 bài <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
